const User = require('../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

async function create(req, res) {
    try { 
      req.body.uid = req.user.uid;
      const user = await User.create(req.body);  
      res.json(user);
    } catch (err) { 
      res.status(400).json(err);
    }
  }

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email }); 
        const isValid = await bcrypt.compare(req.body.password, user.password)
        if (isValid) {
            const token = createJWT(user)
            return res.json(token)
        }
        throw new Error
      } catch (err) { 
        res.status(401).json('Unauthorized - Bad Credentials');
      }
}  

    function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
      console.log('req.user', req.user);
      res.json(req.exp);
    }

    function createJWT(user) {
        return jwt.sign(
            { user },
            process.env.SECRET,
            { expiresIn: '24h'}
        )
    }
 



  