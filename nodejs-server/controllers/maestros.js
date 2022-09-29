'use strict';

const {validationResult} = require("express-validator");

const Maestro = require("../models/Maestro");

exports.getMaestros = (req, res) => {

   Maestro.find().exec((err, maestros) => {
      if(err) return res.status(500).json({ status: 500, msg: err})

      if(!maestros) return res.status(200).json({ status: 200, msg: "No existen maestros creados"})

      return res.status(200).json({
         status: 200,
         data: maestros
      })
   });
}

exports.getMaestro = (req, res) => {

   const idMaestro = req.params.idMaestro;

   Maestro.findOne({idMaestro}).exec((err, maestro) => {
      if(err) return res.status(500).json({ status: 500, msg: err})

      if(!maestro) return res.status(200).json({ status: 200, msg: "No se encontró el maestro consultado"})

      return res.status(200).json({
         status: 200,
         data: maestro
      })
   });
}

exports.crearMaestro = (req, res) => {

   /* Validación de datos */
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
   }

   const infoMaestro = req.body;
   let maestroSave = new Maestro();

   maestroSave.idMaestro = infoMaestro.idMaestro;
   maestroSave.nombre = infoMaestro.nombre;
   maestroSave.asignatura = infoMaestro.asignatura;
   maestroSave.horasSemana = infoMaestro.horasSemana;

   Maestro.findOne({idMaestro: maestroSave.idMaestro}).exec((err, maestro) => {
      if(err) return res.status(500).json({ status: 500, msg: err})

      if(maestro) return res.status(200).json({ status: 200, msg: "Ya existe un maestro creado con el ID ingresado"});

      maestroSave.save((err, maestro) => {
         if(err) return res.status(500).json({ status: 500, msg: err})

         if(!maestro) return res.status(200).json({ status: 200, msg: "El maestro no fue registrado"})

         return res.status(200).json({
            status: 200,
            msg: "Maestro registrado satisfactoriamente",
            data: maestro
         })
      });
   })
}

exports.actualizarMaestro = (req, res) => {
   /* Validación de datos */
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
   }

   const {idMaestro, nombre, asignatura, horasSemana} = req.body;
   const idMaestroParam = req.params.idMaestro

   const infoMaestroUpdate = {
      idMaestro,
      nombre,
      asignatura,
      horasSemana
   }

   Maestro.findOneAndUpdate({idMaestro: idMaestroParam}, infoMaestroUpdate, {new: true}, (err, maestroUpdate) => {
      if(err) return res.status(500).json({msg: "Error al actualizar el maestro"});

      if(!maestroUpdate) return res.status(404).json({ status: 404, msg: "No existe el maestro a actualizar"});

      return res.status(200).json({
         status: 200,
         msg: "Maestro actualizado satisfactoriamente",
         data: maestroUpdate
      })
   });
}

exports.eliminarMaestro = (req, res) => {

   const idMaestro = req.params.idMaestro;

   Maestro.findOneAndRemove({idMaestro}, (err, maestroDelete) => {
      if(err) return res.status(500).json({msg: "Error al eliminar el maestro"});

      if(!maestroDelete) return res.status(404).json({ status: 404, msg: "No existe el maestro a eliminar"});

      return res.status(200).json({
         status: 200,
         msg: "Maestro eliminado satisfactoriamente",
         data: maestroDelete
      })
   });
}