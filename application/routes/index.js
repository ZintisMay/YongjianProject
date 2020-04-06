var express = require('express');
var router = express.Router();

/* GET home page. */
// localhost:3000
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

// localhost:3000/home
router.get('/home', function(req, res, next) {
  res.sendFile('index.html');
  // res.sendFile('../public/home.html');
});

router.get('/login', function(req, res, next) {
  res.sendFile('login.html');
});

router.get('/post', function(req, res, next) {
  res.sendFile('post.html');
});

router.get('/registration', function(req, res, next) {
  res.sendFile('registration.html');
});

module.exports = router;
