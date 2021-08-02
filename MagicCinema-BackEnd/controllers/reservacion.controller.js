'use strict'

var Reservacion = require('../models/reservacion.model')
var Asiento = require('../models/asiento.model')
var User = require('../models/user.model')
var Pelicula = require('../models/pelicula.model')

function reservarAsiento(req, res){
    var userId = req.params.idU;
    var asientoId = req.params.idA;
    var params = req.body;
    var reservacion = new Reservacion();
    var asiento = new Asiento();
    var pelicula = new Pelicula();

    if(userId != req.user.sub){
        return res.send({message: 'No tienes permiso para realizar esta acción'})
    }else{
        if(params.fecha && params.numeroTarjeta){
            reservacion.fecha = params.fecha;
            reservacion.numeroTarjeta = params.numeroTarjeta;
            reservacion.precio = 30;
            reservacion.asiento = asientoId;

            reservacion.save((err, reservacionSaved)=>{
                if(err){
                    return res.status(500).send({message: 'Error general', err})
                }else if(reservacionSaved){
                    User.findByIdAndUpdate(userId, {$push:{reservaciones: reservacionSaved._id}}, {new:true}, (err,userPush)=>{
                        if(err){
                            res.status(500).send({message: 'Error general al reservar'});
                            console.log(err);
                        }else if(userPush){
                            Asiento.findByIdAndUpdate(asientoId, {$set:{estado: 'Ocupado'}}, {new: true}, (err, asientoSet)=>{
                                if(err){
                                    return res.status(500).send({message: 'Error general al intentar actualizar el asiento'});
                                }else if(asientoSet){
                                    return res.send({message: 'Reservación exitosa', asientoSet})
                                }else{
                                    return res.status(403).send({message: 'No se hizo la reservación'})
                                }
                            })
                        }else{
                            res.send({message: 'No se creó la reservación'})
                        }
                    })
                }else{
                    return res.status(500).send({message: 'No se hizo la reservación'})
                }
            })  
        }else{
            return res.send({message: 'Debes de llenar los datos completos'})
        }
    }
}

module.exports = {
    reservarAsiento
}