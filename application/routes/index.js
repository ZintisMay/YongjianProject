var express = require('express');
var router = express.Router();
var path = require('path');
var rootObj = {root: __dirname + '/../'};

/* GET home page. */
// localhost:3000
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

// localhost:3000/home
router.get('/home', function(req, res, next) {
	res.sendFile('/public/home.html', rootObj);
});


router.get('/login', function(req, res, next) {
  // res.sendFile('login.html');
	res.sendFile('/public/login.html', rootObj);
});

router.get('/post', function(req, res, next) {
  // res.sendFile('post.html');
	res.sendFile('/public/post.html', rootObj);
});

router.get('/registration', function(req, res, next) {
  // res.sendFile('registration.html');
	res.sendFile('/public/registration.html', rootObj);
});

router.get('*', function(req, res, next){
	res.send("404 Page not found")
})
module.exports = router;
