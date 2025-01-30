const express = require('express');
const router = express.Router();
const results = require('../data/results.json');

router.get('/api/questions', (req, res) => {
  res.json(results);
});

module.exports = router;