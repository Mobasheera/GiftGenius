const express = require('express');
const { recommendGift } = require('../controllers/aiController');
const router = express.Router();

router.post('/recommend', recommendGift);

module.exports = router;
