'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cineSchema =Schema({
    name:String,
    direccion:String,
    image:String,
    admin: [{type: Schema.ObjectId, ref: 'user'}],
    peliculas:[{type: Schema.ObjectId, ref: 'pelicula'}],
    golosinas:[{type: Schema.ObjectId, ref: 'golosina'}]
})

module.exports = mongoose.model('cine', cineSchema);