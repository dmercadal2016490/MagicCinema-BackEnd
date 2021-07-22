'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var golosinaSchema =Schema({
    name:String,
    descripcion:String,
    precio:Number,
    image:String,
})

module.exports = mongoose.model('golosina', golosinaSchema);