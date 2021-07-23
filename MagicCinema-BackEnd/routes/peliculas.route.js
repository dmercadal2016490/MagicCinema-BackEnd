'use strict'

var express = require('express');
var peliculaController = require('../controllers/pelicula.controller');
var connectMultiparty = require('connect-multiparty');
var mdAuth = require('../middlewares/authenticated');
const upload = connectMultiparty({uploadDir: './uploads/peliculas'});

var api = express.Router();

api.put('/:idU/addMovie/:idC', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], peliculaController.addMovie);
api.put('/:idU/updateMovie/:idC/:idM', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], peliculaController.updateMovie);
api.delete('/:idU/deleteMovie/:idC/:idM', [mdAuth.ensureAuth, mdAuth.ensureAuthAdmin], peliculaController.deleteMovie);
api.get('/getMovies', peliculaController.getMovies);

//Imagen
api.put('/:id/uploadImageMovie/:idP', [mdAuth.ensureAuth,mdAuth.ensureAuthAdmin,upload], peliculaController.uploadImageMovie);
api.get('/getImageMovie/:fileName', [upload], peliculaController.getImageMovie);


module.exports = api;