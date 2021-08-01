'use strict'

var Pelicula = require('../models/pelicula.model');
var Cine = require('../models/cine.model');
var Asiento = require('../models/asiento.model')
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function addMovie(req,res){
    var userId = req.params.idU;
    var cineId = req.params.idC;
    var params = req.body;
    var pelicula = new Pelicula();
    var asiento = new Asiento();
    var asiento2 = new Asiento();
    var asiento3 = new Asiento();
    var asiento4 = new Asiento();
    var asiento5 = new Asiento();
    var asiento6 = new Asiento();
    var asiento7 = new Asiento();
    var asiento8 = new Asiento();
    var asiento9 = new Asiento();
    var asiento10 = new Asiento();
    var asiento11 = new Asiento();
    var asiento12 = new Asiento();
    var asiento13 = new Asiento();
    var asiento14 = new Asiento();
    var asiento15 = new Asiento();
    var asiento16 = new Asiento();
    var asiento17 = new Asiento();
    var asiento18 = new Asiento();
    var asiento19 = new Asiento();
    var asiento20 = new Asiento();
    var asiento21 = new Asiento();
    var asiento22 = new Asiento();
    var asiento23 = new Asiento();
    var asiento24 = new Asiento();
    var asiento25 = new Asiento();

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para crear una golosina'});
    }else{
        Cine.findById(cineId, (err, cineFind)=>{
            if(err){
                res.status(500).send({message: 'Error general al buscar el cine'});
                console.log(err);
            }else if(cineFind){
                if(params.name && params.sinopsis && params.clasificacion && params.categoria && params.estado){
                    Pelicula.findOne({name: params.name}, (err, PeliculaFound)=>{
                        if(err){
                            res.status(500).send({message: 'Error general al buscar la pelicula'});
                        }else if(PeliculaFound){
                            res.send({message: 'La pelicula que quieres agregar ya existe'});
                        }else{
                            pelicula.name = params.name.toLowerCase()
                            pelicula.sinopsis =  params.sinopsis
                            pelicula.clasificacion  = params.clasificacion;
                            pelicula.categoria  = params.categoria;
                            pelicula.estado  = params.estado;

                            pelicula.save((err,peliculaSaved)=>{
                                if(err){
                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                    console.log(err)
                                }else if(peliculaSaved){
                                    Cine.findByIdAndUpdate(cineId, {$push:{peliculas: peliculaSaved._id}}, {new:true}, (err,cinePushed)=>{
                                        if(err){
                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                            console.log(err);
                                        }else if(cinePushed){
                                            asiento.codAsiento = 'A1';
                                            asiento.estado = 'Disponible';
                                            asiento.save((err,asientoSaved)=>{
                                                if(err){
                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                    console.log(err)
                                                }else if(asientoSaved){
                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                        if(err){
                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                            console.log(err);
                                                        }else if(peliculaPush){
                                                            asiento2.codAsiento = 'A2';
                                                            asiento2.estado = 'Disponible';
                                                            asiento2.save((err,asientoSaved)=>{
                                                                if(err){
                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                    console.log(err)
                                                                }else if(asientoSaved){
                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                        if(err){
                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                            console.log(err);
                                                                        }else if(peliculaPush){
                                                                            asiento3.codAsiento = 'A3';
                                                                            asiento3.estado = 'Disponible';
                                                                            asiento3.save((err,asientoSaved)=>{
                                                                                if(err){
                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                    console.log(err)
                                                                                }else if(asientoSaved){
                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                        if(err){
                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                            console.log(err);
                                                                                        }else if(peliculaPush){
                                                                                            asiento4.codAsiento = 'A4';
                                                                                            asiento4.estado = 'Disponible';
                                                                                            asiento4.save((err,asientoSaved)=>{
                                                                                                if(err){
                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                    console.log(err)
                                                                                                }else if(asientoSaved){
                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                        if(err){
                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                            console.log(err);
                                                                                                        }else if(peliculaPush){
                                                                                                            asiento5.codAsiento = 'A5';
                                                                                                            asiento5.estado = 'Disponible';
                                                                                                            asiento5.save((err,asientoSaved)=>{
                                                                                                                if(err){
                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                    console.log(err)
                                                                                                                }else if(asientoSaved){
                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                        if(err){
                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                            console.log(err);
                                                                                                                        }else if(peliculaPush){
                                                                                                                            asiento6.codAsiento = 'B1';
                                                                                                                            asiento6.estado = 'Disponible';
                                                                                                                            asiento6.save((err,asientoSaved)=>{
                                                                                                                                if(err){
                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                    console.log(err)
                                                                                                                                }else if(asientoSaved){
                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                        if(err){
                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                            console.log(err);
                                                                                                                                        }else if(peliculaPush){
                                                                                                                                            asiento7.codAsiento = 'B2';
                                                                                                                                            asiento7.estado = 'Disponible';
                                                                                                                                            asiento7.save((err,asientoSaved)=>{
                                                                                                                                                if(err){
                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                    console.log(err)
                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                        if(err){
                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                            console.log(err);
                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                            asiento8.codAsiento = 'B3';
                                                                                                                                                            asiento8.estado = 'Disponible';
                                                                                                                                                            asiento8.save((err,asientoSaved)=>{
                                                                                                                                                                if(err){
                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                    console.log(err)
                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                        if(err){
                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                            console.log(err);
                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                            asiento9.codAsiento = 'B4';
                                                                                                                                                                            asiento9.estado = 'Disponible';
                                                                                                                                                                            asiento9.save((err,asientoSaved)=>{
                                                                                                                                                                                if(err){
                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                        if(err){
                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                            asiento10.codAsiento = 'B5';
                                                                                                                                                                                            asiento10.estado = 'Disponible';
                                                                                                                                                                                            asiento10.save((err,asientoSaved)=>{
                                                                                                                                                                                                if(err){
                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                            asiento11.codAsiento = 'C1';
                                                                                                                                                                                                            asiento11.estado = 'Disponible';
                                                                                                                                                                                                            asiento11.save((err,asientoSaved)=>{
                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                            asiento12.codAsiento = 'C2';
                                                                                                                                                                                                                            asiento12.estado = 'Disponible';
                                                                                                                                                                                                                            asiento12.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                            asiento13.codAsiento = 'C3';
                                                                                                                                                                                                                                            asiento13.estado = 'Disponible';
                                                                                                                                                                                                                                            asiento13.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                            asiento14.codAsiento = 'C4';
                                                                                                                                                                                                                                                            asiento14.estado = 'Disponible';
                                                                                                                                                                                                                                                            asiento14.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                            asiento15.codAsiento = 'C5';
                                                                                                                                                                                                                                                                            asiento15.estado = 'Disponible';
                                                                                                                                                                                                                                                                            asiento15.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                            asiento16.codAsiento = 'D1';
                                                                                                                                                                                                                                                                                            asiento16.estado = 'Disponible';
                                                                                                                                                                                                                                                                                            asiento16.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                            asiento17.codAsiento = 'D2';
                                                                                                                                                                                                                                                                                                            asiento17.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                            asiento17.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                            asiento18.codAsiento = 'D3';
                                                                                                                                                                                                                                                                                                                            asiento18.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                                            asiento18.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                                            asiento19.codAsiento = 'D4';
                                                                                                                                                                                                                                                                                                                                            asiento19.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                                                            asiento19.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                                                            asiento20.codAsiento = 'D5';
                                                                                                                                                                                                                                                                                                                                                            asiento20.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                                                                            asiento20.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                                                                            asiento21.codAsiento = 'E1';
                                                                                                                                                                                                                                                                                                                                                                            asiento21.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                                                                                            asiento21.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                                                                                            asiento22.codAsiento = 'E2';
                                                                                                                                                                                                                                                                                                                                                                                            asiento22.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                                                                                                            asiento22.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                                                                                                            asiento23.codAsiento = 'E3';
                                                                                                                                                                                                                                                                                                                                                                                                            asiento23.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                                                                                                                            asiento23.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                                                                                                                            asiento24.codAsiento = 'E4';
                                                                                                                                                                                                                                                                                                                                                                                                                            asiento24.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                                                                                                                                            asiento24.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                                                                                                                                            asiento25.codAsiento = 'E5';
                                                                                                                                                                                                                                                                                                                                                                                                                                            asiento25.estado = 'Disponible';
                                                                                                                                                                                                                                                                                                                                                                                                                                            asiento25.save((err,asientoSaved)=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                if(err){
                                                                                                                                                                                                                                                                                                                                                                                                                                                    res.status(500).send({message: 'Error general al guardar la pelicula'});
                                                                                                                                                                                                                                                                                                                                                                                                                                                    console.log(err)
                                                                                                                                                                                                                                                                                                                                                                                                                                                }else if(asientoSaved){
                                                                                                                                                                                                                                                                                                                                                                                                                                                    Pelicula.findByIdAndUpdate(peliculaSaved._id, {$push:{asientos: asientoSaved._id}}, {new:true}, (err,peliculaPush)=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                        if(err){
                                                                                                                                                                                                                                                                                                                                                                                                                                                            res.status(500).send({message: 'Error general al guardar la pelicula en el cine'});
                                                                                                                                                                                                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                                                                                                                                                                                                        }else if(peliculaPush){
                                                                                                                                                                                                                                                                                                                                                                                                                                                            res.send({message: 'Película creada ', peliculaPush})
                                                                                                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            })
                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            })
                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    })
                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                                }
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }else{
                                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                                        }
                                                                                                                                                                                                    })
                                                                                                                                                                                                }else{
                                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                                }
                                                                                                                                                                                            })
                                                                                                                                                                                        }else{
                                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                                        }
                                                                                                                                                                                    })
                                                                                                                                                                                }else{
                                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                                }
                                                                                                                                                                            })
                                                                                                                                                                        }else{
                                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                                        }
                                                                                                                                                                    })
                                                                                                                                                                }else{
                                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                                }
                                                                                                                                                            })
                                                                                                                                                        }else{
                                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                                        }
                                                                                                                                                    })
                                                                                                                                                }else{
                                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                                }
                                                                                                                                            })
                                                                                                                                        }else{
                                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                }else{
                                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                                }
                                                                                                                            })
                                                                                                                        }else{
                                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                                        }
                                                                                                                    })
                                                                                                                }else{
                                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                                }
                                                                                                            })
                                                                                                        }else{
                                                                                                            res.send({message: 'No se guardó la película'})
                                                                                                        }
                                                                                                    })
                                                                                                }else{
                                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                                }
                                                                                            })
                                                                                        }else{
                                                                                            res.send({message: 'No se guardó la película'})
                                                                                        }
                                                                                    })
                                                                                }else{
                                                                                    res.send({message: 'No se agrego el asiento'})
                                                                                }
                                                                            })
                                                                        }else{
                                                                            res.send({message: 'No se guardó la película'})
                                                                        }
                                                                    })
                                                                }else{
                                                                    res.send({message: 'No se agrego el asiento'})
                                                                }
                                                            })
                                                        }else{
                                                            res.send({message: 'No se guardó la película'})
                                                        }
                                                    })
                                                }else{
                                                    res.send({message: 'No se agrego el asiento'})
                                                }
                                            })
                                        }else{
                                            res.send({message: 'No se guardo la pelicula en el cine'})
                                        }
                                    })
                                }else{
                                    res.send({message: 'No se agrego la pelicula'})
                                }
                            })
                        }
                    })
                }else{
                    res.send({message: 'Porfavor ingresa todos los campos'});
                }
            }else{
                res.status(404).send({message: 'El cine que quieres agregar la pelicula no existe'});
            }
        })
    }
}

function updateMovie(req,res){
    var userId = req.params.idU;
    var cineId = req.params.idC;
    var movieId = req.params.idM;
    var params = req.body;

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para modificar una pelicula'});
    }else{
        Pelicula.findById(movieId, (err,movieFound)=>{
            if(err){
                res.status(500).send({message: 'Error general al buscar la pelicula'});
                console.log(err);
            }else if(movieFound){
                Cine.findOne({_id: cineId, peliculas: movieId}, (err, cineFind)=>{
                    if(err){
                        res.status(500).send({message: 'Error general al buscar el cine'});
                    }else if(cineFind){
                        Pelicula.findByIdAndUpdate(movieId, params, {new:true}, (err,movieUpdated)=>{
                            if(err){
                                res.status(500).send({message: 'Error general al actulizar la pelicula'});
                                console.log(err)
                            }else if(movieUpdated){
                                res.send({message: 'Pelicula actualizada: ', movieUpdated});
                            }else{
                                res.send({message: 'No se actualizo la pelicula'});
                            }
                        })
                    }
                })
            }else{
                res.status(404).send({message: 'No se encontro la pelicula'})
            }
        })
    }
}

function deleteMovie(req,res){
    var userId = req.params.idU;
    var cineId = req.params.idC;
    var movieId = req.params.idM;

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para eliminar una pelicula'});
    }else{
        Cine.findOneAndUpdate({_id: cineId, peliculas: movieId}, {$pull:{peliculas:movieId}}, {new: true}, (err, moviePulled)=>{
            if(err){
                res.status(500).send({message: 'Error general al buscar el cine'});
            }else if(moviePulled){
                Pelicula.findByIdAndDelete(movieId, (err, movieRemoved)=>{
                    if(err){
                        res.status(500).send({message: 'Error general al eliminar la pelicula'});
                        console.log(err);
                    }if(movieRemoved){
                        res.send({message: 'Pelicula eliminada'});
                    }else{
                        res.send({message: 'Pelicula se elimino correctamente'});
                    }
                })
            }else{
                return res.send({message: 'No se encontro el cine'});
            }
        })
    }
}

function uploadImageMovie(req, res){
    var userId = req.params.id;
    var peliculaId= req.params.idP;
    var update = req.body;
    var fileName;

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para cambiar la foto de una pelicula'});
    }else{
        if(req.files){
            var filePath = req.files.image.path;
        
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[2];

            var extension = fileName.split('\.');
            var fileExt = extension[1];
            if( fileExt == 'png' ||
                fileExt == 'jpg' ||
                fileExt == 'jpeg' ||
                fileExt == 'gif'){
                    Pelicula.findByIdAndUpdate(peliculaId, {image: fileName}, {new:true}, (err, movieUpdated)=>{
                        if(err){
                            res.status(500).send({message: 'Error general'});
                        }else if(movieUpdated){
                            res.send({pelicula: movieUpdated, peliculaImage:movieUpdated.image});
                        }else{
                            res.status(400).send({message: 'No se ha podido actualizar'});
                        }
                    })
                }else{
                    fs.unlink(filePath, (err)=>{
                        if(err){
                            res.status(500).send({message: 'Extensión no válida y error al eliminar archivo'});
                        }else{
                            res.send({message: 'Extensión no válida'})
                        }
                    })
                }
        }else{
            res.status(400).send({message: 'No has enviado imagen a subir'})
        }
    }
}

function getImageMovie(req,res){
    var fileName = req.params.fileName;
    var pathFile = './uploads/peliculas/' + fileName;

    fs.exists(pathFile, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(pathFile));
        }else{
            res.status(404).send({message: 'Imagen inexistente'});
        }
    })
}

function getMovies(req,res){
    Pelicula.find({}).exec((err, movies)=>{
        if(err){
            res.status(500).send({message: 'Error general al buscar usuarios'});
            console.log(err)
        }else if(movies){
            res.send({message: 'Peliculas encontradas: ', movies})
        }else{
            res.send({message: 'No existe ningun usuario'})
        }
    })
}

function getMoviees (req, res){
    var cineId = req.params.idC;
    Cine.findById(cineId).populate({path: 'peliculas', populate:{path:'cine'}}).exec((err, peliculas)=>{
        if(err){
            res.status(500).send({message: 'Error general al buscar peliculas', err});
            console.log(err);
        }else if(peliculas){
            res.send({message: 'peliculas: ', peliculas})
        }else{
            res.send({message: 'No existe'})
        }
    })
}

function getAsientos(req, res){
    var peliculaId = req.params.idP

    Pelicula.findById(peliculaId).populate({path:'asientos', populate:{path: 'pelicula'}}).exec((err, asientos)=>{
        if(err){
            res.status(500).send({message: 'Error general al buscar los asientos', err});
            console.log(err);
        }else if(asientos){
            res.send({message: 'asientos: ', asientos})
        }else{
            res.send({message: 'No existe'})
        }
    })
}

module.exports ={
    addMovie,
    updateMovie,
    deleteMovie,
    uploadImageMovie,
    getImageMovie,
    getMovies,
    getMoviees,
    getAsientos
}