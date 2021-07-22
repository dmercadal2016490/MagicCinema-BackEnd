'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var userRoutes = require('./routes/user.route');
var cineRoutes = require('./routes/cine.route');
var golosinasRoutes = require('./routes/golosinas.route');

var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use('/api', userRoutes);
app.use('/api', cineRoutes);
api.use('/api', golosinasRoutes);

module.exports = app;