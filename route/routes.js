const express = require('express');
const path = require('path');
const router = express.Router();
const publicPath = path.join(__dirname, '..', 'public');

router.get('/test2', (req, res) => {
  res.sendFile(path.join(publicPath, 'index2.html'));
});

router.get('/test', (req, res) => {
  res.sendFile(path.join(publicPath, 'index3.html'));
});

module.exports = router;
