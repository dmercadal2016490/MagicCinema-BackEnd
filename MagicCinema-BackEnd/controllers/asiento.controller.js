'use strict'

var Asiento = require('../models/asiento.model');
var Pelicula = require('../models/pelicula.model');
var Cine = require('../models/cine.model')
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function addAsiento(req, res){
    var userId = req.params.idU;
    var cineId = req.params.idC;
    var movieId = req.params.idM;
    var params = req.body;
    var asiento = new Asiento();

    if(userId != req.user.sub){
        return res.status(403).send({message: 'No tienes permiso para realizar esta acción'})
    }else{
        Cine.findById(cineId, (err, cineFind)=>{
            if(err){
                return res.status(500).send({message: 'Error general al buscar el cine'})
            }else if(cineFind){
                if(params.codAsiento && params.estado){
                    Asiento.findOne({codAsiento: params.codAsiento}, (err, asientoFound)=>{
                        if(err){
                            return res.status(500).send({message: 'Error general al buscar el asiento'})
                        }else if(asientoFound){
                            return res.send({message: 'Asiento ocupado'})
                        }else{
                            asiento.codAsiento = params.codAsiento;
                            asiento.estado = params.estado;

                            asiento.save((err,asientoSaved)=>{
                                if(err){
                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                    console.log(err)
                                }else if(asientoSaved){
                                    Pelicula.findByIdAndUpdate(movieId, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                        if(err){
                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                            console.log(err);
                                        }else if(peliculaPush){
                                            res.send({message: 'Asiento reservado ', peliculaPush})
                                        }else{
                                            res.send({message: 'No se reservó el asiento'})
                                        }
                                    })
                                }else{
                                    res.send({message: 'No se agrego el asiento'})
                                }
                            })
                        }
                    })
                }else{
                    return res.status(404).send({message: 'Debes de llenar los datos completos'})
                }
            }else{
                return res.status(404).send({message: 'El cine no existe'})
            }
        })
    }
}

module.exports = {
    addAsiento
}