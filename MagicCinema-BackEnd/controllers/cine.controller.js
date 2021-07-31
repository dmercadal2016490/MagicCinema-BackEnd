'use strict'

var Cine = require('../models/cine.model');
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function addCine(req,res){
    var userId = req.params.idU;
    var params = req.body;
    var cine = new Cine();

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para crear un cine'});
    }else{
        if(params.name && params.direccion && params.admin){
            Cine.findOne({name:params.name}, (err, cineFind)=>{
                if(err){
                    res.status(500).send({message:'Error general'});
                    console.log(err);
                }else if(cineFind){
                    res.send({message:  'El cine que quieres agregar ya existe'});
                }else{
                    cine.name = params.name;
                    cine.direccion = params.direccion;
                    cine.admin = params.admin;
    
                    cine.save((err,cineSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error general al salvar el cine'});
                            console.log(err)
                        }else if(cineSaved){
                            res.send({message:'Cine guardado con exito', cineSaved});
                        }else{
                            res.send({message:'No se guardo el cine'});
                        }
                    })
                }
            }).populate('admin')
        }else{
            return res.status(500).send({message: 'Ingresa los datos completos'})
        }
    }
}

function uploadImageCine(req, res){
    var userId = req.params.idU;
    var cineId = req.params.idC
    var update = req.body;
    var fileName;

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para cambiar la foto de un cine'});
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
                    Cine.findByIdAndUpdate(cineId, {image: fileName}, {new:true}, (err, cineUpdated)=>{
                        if(err){
                            res.status(500).send({message: 'Error general'});
                            console.log(err);
                        }else if(cineUpdated){
                            res.send({cine: cineUpdated, cineImage:cineUpdated.image});
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

function getImageCine(req,res){
    var fileName = req.params.fileName;
    var pathFile = './uploads/cine/' + fileName;

    fs.exists(pathFile, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(pathFile));
        }else{
            res.status(404).send({message: 'Imagen inexistente'});
        }
    })
}

function updateCine(req,res){
    var userId = req.params.idU;
    var cineId = req.params.idC;
    var params = req.body;

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para actualizar este cine'});
    }else{
        Cine.findOne({name: params.name.toLowerCase()}, (err,cineFound)=>{
            if(err){
                res.status(500).send({message:'Error general al buscar el cine'});
                console.log(err);
            }else if(cineFound){
                if(cineFound.name == params.name){
                    Cine.findByIdAndUpdate(cineId, params,{new:true}, (err,cineUpdated)=>{
                        if(err){
                            res.status(500).send({message: 'Error general al actualizar el cine'});
                        }else if(cineUpdated){
                            res.send({message: 'Cine actualizado ', cineUpdated})
                        }else{
                            res.send({message: 'No se actualizo el cine'});
                        }
                    })
                }else{
                    res.send({message:'Este cine ya existe'});
                }
            }else{
                Cine.findByIdAndUpdate(cineId, params,{new:true}, (err,cineUpdated)=>{
                    if(err){
                        res.status(500).send({message: 'Error general al actualizar el cine'});
                    }else if(cineUpdated){
                        res.send({message: 'Cine actualizado ', cineUpdated})
                    }else{
                        res.send({message: 'No se actualizo el cine'});
                    }
                })
            }
        })
    } 
}

function deleteCine(req,res){
    var userId = req.params.idU;
    var cineId = req.params.idC;

        Cine.findByIdAndRemove(cineId, (err,cineRemoved)=>{
            if(err){
                res.status(500).send({message: 'Error general al eliminar el cine'})
            }else if(cineRemoved){
                res.send({message: 'El cine ha sido eliminado', cineRemoved})
            }else{
                res.status(404).send({message: 'El cine que quieres eliminar no existe'})
            }
        })
}

function getCines(req,res){
        Cine.find().populate({
            path: 'cine',
            populate:{
                path: 'peliculas',
                path: 'admin',
                path: 'golosinas',
            }
        }).exec((err, cines)=>{
            if(err){
                res.status(500).send({message: 'Error general el buscar los cines'});
            }else if(cines){
                res.send({message: 'Cines encontrados: ', cines})
            }else{
                res.send({message: 'No existen cines en la base de datos'});
            }
        });
    
}

module.exports ={
    addCine,
    uploadImageCine,
    getImageCine,
    updateCine,
    deleteCine,
    getCines
}