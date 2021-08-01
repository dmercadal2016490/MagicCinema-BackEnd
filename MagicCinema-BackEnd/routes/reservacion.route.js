'use strict'

var express = require('express');
var mdAuth = require('../middlewares/authenticated');
var reservacionController = require('../controllers/reservacion.controller')

var api = express.Router();

api.put('/:idU/reservarAsiento/:idA', [mdAuth.ensureAuth], reservacionController.reservarAsiento);

module.exports = api;