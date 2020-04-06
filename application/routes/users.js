var express = require('express');
var router = express.Router();

/* GET users listing. */

// localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/yongjian/:id', function(req, res, next) {
  res.send('respond with a yongjian ' + req.params.id);
});

module.exports = router;
