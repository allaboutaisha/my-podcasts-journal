const express = require('express');
const router = express.Router();
const podcastsCtrl = require('../../controllers/api/podcasts');

router.post('/', podcastsCtrl.create);
router.get('/podcasts', podcastsCtrl.index);

module.exports = router;