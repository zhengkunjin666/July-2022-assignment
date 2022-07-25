var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/landing', function(req, res, next) {
  res.render('show/landing.tpl', { title: '预约试驾' });
});

module.exports = router;
