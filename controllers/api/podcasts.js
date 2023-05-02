const Podcast = require('../../models/podcast');

module.exports = {
    create,
    index
};

async function create(req, res) {
    // req.body.uid = req.user.uid;
    const podcast = await Podcast.create(req.body);
    console.log(req.body)
    res.json(podcast);
};

async function index(req, res) {
    const userPodcasts = await Podcast.find();
    console.log(userPodcasts)
    res.json(userPodcasts);
}

// async function index(req, res) {
//     const userPodcasts = await Podcast.find({ uid: req.user.uid });
//     console.log(userPodcasts)
//     res.json(userPodcasts);
// }