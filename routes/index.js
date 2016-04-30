'use strict';

/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();

/**
 * GET home page.
 */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Jam Session',
    host: req.headers.host,
    sounds: [
      { mp3: 'kick.mp3', title: 'Kick' },
      { mp3: 'snare.mp3', title: 'Snare' },
      { mp3: 'keys.mp3', title: 'Keys' }
    ]
  });
});

/**
 * Export router.
 */
module.exports = router;
