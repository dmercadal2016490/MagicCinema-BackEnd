'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peliculaSchema = Schema({
    name:String,
    sinopsis:String,
    clasificacion:String,
    categoria:String,
    estado:String,
    fechaEstreno:String,
    image:String,
    asientos:[{type: Schema.ObjectId, ref: 'asiento'}]
});

module.exports = mongoose.model('pelicula', peliculaSchema);