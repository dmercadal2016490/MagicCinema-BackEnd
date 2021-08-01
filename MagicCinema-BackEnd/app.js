'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var userRoutes = require('./routes/user.route');
var cineRoutes = require('./routes/cine.route');
var golosinasRoutes = require('./routes/golosinas.route');
var peliculasRoutes = require('./routes/peliculas.route');
var asientoRoutes = require('./routes/asiento.route')
var reservacionRoutes = require('./routes/reservacion.route')

var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use('/api', userRoutes);
app.use('/api', cineRoutes);
app.use('/api', golosinasRoutes);
app.use('/api', peliculasRoutes);
app.use('/api', asientoRoutes);
app.use('/api', reservacionRoutes);

module.exports = app;