'use strict'

var Factura = require('../models/factura.model')
var Pelicula = require('../models/pelicula.model')
var User = require('../models/user.model')
var Asiento = require('../models/asiento.model')

function createFactura(req, res){
    var userId = req.params.idU;
    var peliculaId = req.params.idP;
    var asientoId = req.params.idA;
    var factura = new Factura();

    if(userId != req.user.sub){
        return res.send({message: 'No tienes permiso para realizar esta acción'})
    }else{
        
    }
}