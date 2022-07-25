var express = require('express');
var router = express.Router();
var userController=require('../contollers/user');
var clueController=require('../contollers/clue');
var csrf=require('../middlewares/csrf');
const authController = require('../contollers/auth');

router.get('/login',csrf.setToken,authController.renderLogin);
router.post('/login',csrf.getToken,authController.login);

router.get('/user',csrf.setToken,userController.show);
router.put('/user',csrf.getToken,userController.update);
router.delete('/user',csrf.getToken,userController.delete);
router.post('/user',csrf.getToken,userController.insert);
router.get('/user/edit',csrf.setToken,userController.editShow);
router.get('/user/new',csrf.setToken,userController.newShow);

router.get('/clue',csrf.setToken,clueController.show);
router.post('/clue',clueController.insertClue);
router.get('/clue/record',csrf.setToken,clueController.recordShow);
router.put('/clue',csrf.getToken,clueController.update);
router.post('/clue/record',csrf.getToken,clueController.insertRecord);

module.exports = router;
