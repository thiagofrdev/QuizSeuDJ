const express = require('express');
const router = express.Router();
const results = require('../data/results.json');

router.get('/results', (req, res) => {
  res.json(results);
});

module.exports = router;