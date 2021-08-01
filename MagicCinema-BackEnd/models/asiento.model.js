'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var asientoSchema = Schema({
    codAsiento:String,
    estado:String
});

module.exports = mongoose.model('asiento', asientoSchema);