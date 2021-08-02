'use strict'

var express = require('express');
var golosinasController = require('../controllers/golosina.controller');
var connectMultiparty = require('connect-multiparty');
var mdAuth = require('../middlewares/authenticated');
const upload = connectMultiparty({uploadDir: './uploads/golosina'});

var api = express.Router();

api.put('/:idU/addGolosina/:idC', [mdAuth.ensureAuth,mdAuth.ensureAuthAdminCine], golosinasController.addGolosina);
api.put('/:idU/updateGolosina/:idC/:idG', [mdAuth.ensureAuth,mdAuth.ensureAuthAdminCine], golosinasController.updateGolosina);
api.put('/:idU/deleteGolosina/:idC/:idG', [mdAuth.ensureAuth,mdAuth.ensureAuthAdminCine], golosinasController.deleteGolosina);
api.get('/getGolosinas/:idC', golosinasController.getGolosinas);

api.put('/:idU/uploadImageGolosina/:idG', [mdAuth.ensureAuth,mdAuth.ensureAuthAdminCine,upload], golosinasController.uploadImageGolosina);
api.get('/getImageGolosina/:fileName', [upload], golosinasController.getImageGolosina);


module.exports = api;