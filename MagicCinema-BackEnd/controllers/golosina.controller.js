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
                            golosina.name = params.name.toLowerCase()
                            golosina.descripcion =  params.descripcion
                            golosina.precio  = params.precio;

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

function uploadImageGolosina(req, res){
    let userId = req.params.idU;
    let golosinaId = req.params.idG;
    let update = req.body;
    var fileName;
    
    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes los permisos para cambiar la foto de la golosina'})
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
                    Golosina.findByIdAndUpdate(golosinaId, {image: fileName}, {new:true}, (err, golosinaUpdated)=>{
                        if(err){
                            res.status(500).send({message: 'Error general'});
                        }else if(golosinaUpdated){
                            res.send({golosina: golosinaUpdated, golosinaImage:golosinaUpdated.image});
                        }else{
                            res.status(400).send({message: 'No se ha podido actualizar'});
                        }
                    })
                }else{
                    fs.unlink(filePath, (err)=>{
                        if(err){
                            res.status(500).send({message: 'Extension no válida y error al eliminar archivo'})
                        }else{
                            res.send({message: 'Extensión no valida'})
                        }
                    })
                }
            }else{
                res.status(400).send({message: 'No has enviado ninguna imagen para subir'})
            }
        }
    }

    function getImageGolosina(req, res){
        var fileName = req.params.fileName;
        var pathFile = './uploads/golosina/' + fileName;

        fs.exists(pathFile, (exists)=>{
            if(exists){
                res.sendFile(path.resolve(pathFile));
            }else{
                res.status(404).send({message: 'Imagen no existe'})
            }
        })
    }

function updateGolosina(req, res){
    let userId = req.params.idU;
    let cineId = req.params.idC;
    let golosinaId = req.params.idG;
    let update = req.body;
    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para modificar una golosina'});
    }else{
        Golosina.findById(golosinaId, (err, golosinaFind)=>{
            if(err){
                return res.status(500).send({message: 'Error general'})
            }else if(golosinaFind){
                Cine.findOne({_id: cineId, golosinas: golosinaId}, (err, cineFind)=>{
                    if(err){
                        return res.status(500).send({message: 'Error genereal al buscar'})
                    }else if(cineFind){
                        Golosina.findByIdAndUpdate(golosinaId, update, {new:true}, (err, golosinaUpdate)=>{
                            if(err){
                                return res.status(500).send({message: 'Error genereal al buscar'})
                            }else if(golosinaUpdate){
                                return res.send({message: 'Golosina Actualizada', golosinaUpdate})
                            }else{
                                return res.status(404).send({messsage: 'Golosina no se actualizó'})
                            }
                        })
                    }else{
                        return res.status(404).send({message: 'No se encontro el cine'})
                    }
                })
            }else{
                return res.status(404).send({message: 'No se encontro la golosina'})
            }
        })
    }
}

function deleteGolosina(req, res){
    let userId = req.params.idU;
    let cineId = req.params.idC;
    let golosinaId = req.params.idG; 

    if(userId != req.user.sub){
        res.status(403).send({message: 'No tienes permisos para eliminar una golosina'});
    }else{
        Cine.findOneAndUpdate({_id: cineId, golosinas: golosinaId}, {$pull:{golosinas:golosinaId}}, {new: true}, (err, golosinaPull)=>{
            if(err){
                return res.status(500).send({message: 'Error general'})
            }else if(golosinaPull){
                Golosina.findByIdAndRemove(golosinaId, (err, golosinaRemove)=>{
                    if(err){
                        return res.status(500).send({message: 'Error general al eliminar golosina'})
                    }else if(golosinaRemove){
                        res.send({message: 'Golosina eliminada'})
                    }else{
                        return res.status(500).send({message: 'Golosina ya eliminada o no se pudo eliminar'})
                    }
                })
            }else{
                return res.status(500).send({message: 'No se pudo eliminar la golosina'})
            }
        })
    }
}

function getGolosinas (req, res){
    var cineId = req.params.idC;
    Cine.findById(cineId).populate({path: 'golosinas', populate:{path:'cine'}}).exec((err, golosinas)=>{
        if(err){
            res.status(500).send({message: 'Error general al buscar golosinas'})
        }else if(golosinas){
            res.send({message: 'Golosinas: ', golosinas})
        }else{
            res.send({message: 'No existe'})
        }
    })
}

module.exports ={
    addGolosina,
    updateGolosina,
    deleteGolosina,
    uploadImageGolosina,
    getGolosinas,
    getImageGolosina
}