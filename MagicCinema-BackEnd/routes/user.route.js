'use strict'

var express = require('express');
var userController = require('../controllers/user.controller');
var connectMultiparty = require('connect-multiparty');
var mdAuth = require('../middlewares/authenticated');
const upload = connectMultiparty({uploadDir: './uploads/user'})

var api = express.Router();

api.post('/login', userController.login);
api.post('/register', userController.register);

//Middlewares
api.post('/saveUser/:idU', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin] ,userController.saveUser);
api.put('/updateUser/:idU', mdAuth.ensureAuth, userController.updateUser);
api.put('/deleteUser/:idU', mdAuth.ensureAuth, userController.deleteUser)
api.get('/getUsers', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], userController.getUsers)
api.get('/getAdmins/:idA', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], userController.getAdmins)

//image
api.put('/:id/uploadImage', [mdAuth.ensureAuth, upload], userController.uploadImage);
api.get('/getImage/:fileName', [upload], userController.getImage);

module.exports = api;