'use strict'

var express = require('express');
var mdAuth = require('../middlewares/authenticated');
var asientoController = require('../controllers/asiento.controller')

var api = express.Router();

api.put('/:idU/addAsiento/:idC/:idM', [mdAuth.ensureAuth], asientoController.addAsiento);

module.exports = api;