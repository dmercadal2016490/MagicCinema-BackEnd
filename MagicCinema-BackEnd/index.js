'use strict'

var mongoose = require('mongoose')
var port = '3200'
var inicioUsuario = require('./controllers/user.controller');
var app = require('./app')

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/CineMagicBD', {useNewUrlParser: true, useFindAndModify: true})
    .then(()=>{
        console.log('conectado a la bd');
        inicioUsuario.createInit();
        app.listen(port, ()=>{
            console.log('servidor de express corriendo')
        })
    })
    .catch((err)=>{console.log('Error al tratar de conectarse')})