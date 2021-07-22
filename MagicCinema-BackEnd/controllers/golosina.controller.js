'use strict'

var Golosina = require('../models/golosinas.model');
var Cine = require('../models/cine.model');
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function addGolosina(req,res){
    var userId = req.params.idU;
    var cineId = req.params.idC;
    var params = req.body;
    var golosina = new Golosina();

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para crear una golosina'});
    }else{
        Cine.findById(cineId, (err, cineFind)=>{
            if(err){
                res.status(500).send({message: 'Error general al buscar el cine'});
                console.log(err);
            }else if(cineFind){
                if(params.name && params.descripcion && params.precio){
                    Golosina.findOne({name: params.name}, (err, golosinaFound)=>{
                        if(err){
                            res.status(500).send({message: 'Error general al buscar la golosina'});
                        }else if(golosinaFound){
                            res.send({message: 'La golosina que quieres agregar ya existe'});
                        }else{
                            params.name = golosina.name.toLowerCase();
                            params.descripcion = golosina.descripcion;
                            params.precio = golosina.precio;

                            golosina.save((err,golosinaSaved)=>{
                                if(err){
                                    res.status(500).send({message: 'Error general al guardar la golosina'});
                                    console.log(err)
                                }else if(golosinaSaved){
                                    Cine.findByIdAndUpdate(cineId, {$push:{golosinas: golosinaSaved._id}}, {new:true}, (err,cinePushed)=>{
                                        if(err){
                                            res.status(500).send({message: 'Error general al guardar la golosina en el cine'});
                                            console.log(err);
                                        }else if(cinePushed){
                                            res.send({message: 'Golosina guardada ', cinePushed})
                                        }else{
                                            res.send({message: 'No se guardo la golosina en el cine'})
                                        }
                                    })
                                }else{
                                    res.send({message: 'No se agrego la golosina'})
                                }
                            })
                        }
                    })
                }else{
                    res.send({message: 'Porfavor ingresa todos los campos'});
                }
            }else{
                res.status(404).send({message: 'El cine que quieres agregar la golosina no existe'});
            }
        })
    }
}



module.exports ={
    addGolosina
}