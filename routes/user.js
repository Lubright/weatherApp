const express = require('express');
const router = express.Router();


// ex5_route_advanced
// /user/profile
router.get('/', function(req, res) {
  res.render('user');
});

// /user/photo
router.get('/photo', function(req, res) {
  res.send('photo');
});

router.get('/card', function(req, res) {
  res.send('card');
});

module.exports = router;