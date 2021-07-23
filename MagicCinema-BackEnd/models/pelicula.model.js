'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peliculaSchema = Schema({
    name:String,
    sinopsis:String,
    clasificacion:String,
    categoria:String,
    estado:String,
    image:String,
    asientos:[{}]
});

module.exports = mongoose.model('peliculas', peliculaSchema);