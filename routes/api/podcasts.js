const express = require('express');
const router = express.Router();
const podcastsCtrl = require('../../controllers/api/podcasts');

router.post('/', podcastsCtrl.create);

module.exports = router;