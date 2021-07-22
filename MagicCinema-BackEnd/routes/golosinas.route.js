'use strict'

var express = require('express');
var golosinasController = require('../controllers/golosina.controller');
var connectMultiparty = require('connect-multiparty');
var mdAuth = require('../middlewares/authenticated');
const upload = connectMultiparty({uploadDir: './uploads/golosina'});

var api = express.Router();

api.put('/:idU/addGolosina/:idC', [mdAuth.ensureAuth,mdAuth.ensureAuthAdmin], golosinasController.addGolosina)

module.exports = api;