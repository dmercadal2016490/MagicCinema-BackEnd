'use strict'

var Pelicula = require('../models/pelicula.model');
var Cine = require('../models/cine.model');
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function addMovie(req,res){
    var userId = req.params.idU;
    var cineId = req.params.idC;
    var params = req.body;
    var pelicula = new Pelicula();

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
                            palicula.fechaEstreno = params.fechaEstreno;

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
                                            res.send({message: 'Pelicula guardada ', cinePushed})
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

function getMoviees(req,res){
    var cineId = req.params.idC;

    Cine.findById(cineId).populate({path:'peliculas', populate:{path:'cine'}}).exec((err, peliculas)=>{
        if(err){
            res.status(500).send({message:'Error general'});
            console.log(err);
        }else if(peliculas){
            res.send({message:'Peliculas: ',peliculas})
        }else{
            res.send({message: 'No hay peliculas'})
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
    getMoviees
}