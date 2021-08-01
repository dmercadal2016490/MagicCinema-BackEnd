'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservacionSchema = Schema({
    fecha:Date,
    numeroTarjeta:Number,
    precio:Number,
    asiento:[{type: Schema.ObjectId, ref: 'asiento'}]
});

module.exports = mongoose.model('reservacion', reservacionSchema);