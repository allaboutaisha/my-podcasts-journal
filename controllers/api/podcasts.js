const Podcast = require('../../models/podcast');

module.exports = {
    create
};

async function create(req, res) {
    const podcast = await Podcast.create(req.body);
    console.log(req.body)
    res.json(podcast);
};
