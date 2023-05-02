const express = require('express');
// const morgan = require('morgan');
const admin = require('firebase-admin');
const { getAuth } = require('firebase-admin/auth');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

require('dotenv').config();

// Connect to the database
require('./config/database'); 

const { PORT = 3001, PRIVATE_KEY_ID, PRIVATE_KEY, CLIENT_ID } = process.env;

const app = express();

admin.initializeApp({ credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "my-podcasts-journal",
    "private_key_id": PRIVATE_KEY_ID,
    "private_key": PRIVATE_KEY.replace('\n', ''),
    "client_email": "firebase-adminsdk-e0shw@my-podcasts-journal.iam.gserviceaccount.com",
    "client_id": CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-e0shw%40my-podcasts-journal.iam.gserviceaccount.com"
  })
});

app.use(logger('dev'));
app.use(express.json());

// Authentication/Authorization Middleware
app.use(async function(req, res, next) {
  try {
    const token = req.get('Authorization');
  if(token) {
    const user = await getAuth().verifyIdToken(token.replace('Bearer', ''));
  } else {
      req.user = null ;
    }
  }
 catch (error) {
    req.user = null;
  }

  next()
});

function isAuthenticated(req, res, next) {
  if(req.user) return next();
  res.status(401).json({
    message: 'you must login first'
  });
}

app.use(cookieParser());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build'))); 
app.use('/api/users', require('./routes/api/users'));  
app.use('/api/podcasts', require('./routes/api/podcasts'));



app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// const port = process.env.PORT || 3001;


app.listen(PORT, function() {
  console.log(`Express app running on port ${PORT}`)
}); 
