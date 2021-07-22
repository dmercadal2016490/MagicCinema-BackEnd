'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: String,
    lastname: String,
    username: String,
    password: String,
    email: String,
    image:String,
    role: String,
    reservaciones: [{type: Schema.ObjectId, ref: 'reservaciones'}],
    factura: [{type: Schema.ObjectId, ref: 'factura'}]
});

module.exports =  mongoose.model('user', userSchema);