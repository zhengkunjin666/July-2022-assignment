var express = require('express');
var router = express.Router();
var cors=require('./../middlewares/cors');
var csrf=require('./../middlewares/csrf');
var bookController=require('./../controllers/book');
var userController=require('./../controllers/user');
var authContoller=require('./../controllers/auth');

router.get('/isbn',cors.allowAll,bookController.info);
router.post('/user',csrf.getToken,userController.insert);
router.put('/user',csrf.getToken,userController.update);
router.delete('/user',csrf.getToken,userController.delete);
router.post('/login',csrf.getToken,authContoller.login);
module.exports = router;
