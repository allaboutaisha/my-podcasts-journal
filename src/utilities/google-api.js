const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.REDIRECT_URI,
);

const scopes = ['https://www.googleapis.com/auth/youtube.readonly', 'https://www.googleapis.com/auth/youtube','https://www.googleapis.com/auth/youtube.force-ssl'];

const youtube = google.youtube({
    version: 'v3',
    auth: oauth2client
});

const res = await youtube.videos.list({
    part: 'snippet, contentDetails',
    id: 'VIDEO_ID'
}
)

