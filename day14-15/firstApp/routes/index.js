var express = require('express');
var router = express.Router();
var userController=require('./../controllers/user');
var csrf=require('./../middlewares/csrf');
var authContoller=require('./../controllers/auth');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Server' });
});
router.get('/user',csrf.setToken,userController.show);
router.get('/login',csrf.setToken,authContoller.renderLogin);
module.exports = router;
