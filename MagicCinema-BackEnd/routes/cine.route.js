'use strict'

var express = require('express');
var cineController = require('../controllers/cine.controller');
var connectMultiparty = require('connect-multiparty');
var mdAuth = require('../middlewares/authenticated');
const upload = connectMultiparty({uploadDir: './uploads/cine'})

var api = express.Router();

api.post('/:idU/addCine', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], cineController.addCine);
api.put('/:idU/updateCine/:idC', [mdAuth.ensureAuth, mdAuth.ensureAuthAdminCine], cineController.updateCine);
api.delete('/:idU/deleteCine/:idC', cineController.deleteCine);
api.get('/getCines', [mdAuth.ensureAuth],cineController.getCines);

//Imagen
api.put('/:idU/uploadImageCine/:idC',[mdAuth.ensureAuth,mdAuth.ensureAuthAdminCine,upload], cineController.uploadImageCine);
api.get('/getImageCine/:fileName', [upload], cineController.getImageCine);

module.exports = api;