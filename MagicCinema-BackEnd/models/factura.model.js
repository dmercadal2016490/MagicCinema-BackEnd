'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var facturaSchema = Schema({
    fecha: Date,
    precio: Number,
    asiento:[{type: Schema.ObjectId, ref: 'asiento'}],
    pelicula: [{type: Schema.ObjectId, ref: 'pelicula'}]
});

module.exports = mongoose.model('factura', facturaSchema)