'use strict';

const { validationResult } = require("express-validator");
const Alumno = require("../models/Alumno");

exports.getAlumno = (req, res) => {

   const numLista = req.params.numLista;

   Alumno.findOne({numLista}).exec((err, alumno) => {
      if(err) return res.status(500).json({ status: 500, msg: err})

      if(!alumno) return res.status(200).json({ status: 200, msg: "No se encontró el alumno consultado"})

      return res.status(200).json({
         status: 200,
         data: alumno
      })
   });
}

exports.getAlumnos = (req, res) => {

   Alumno.find().exec((err, alumnos) => {
      if(err) return res.status(500).json({ status: 500, msg: err})

      if(!alumnos) return res.status(200).json({ status: 200, msg: "No existen alumnos creados"})

      return res.status(200).json({
         status: 200,
         data: alumnos
      })
   });
}

exports.crearAlumno = (req, res) => {

   /* Validación de datos */
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
   }

   const infoAlumno = req.body;
   let alumnoSave = new Alumno();

   alumnoSave.numLista = infoAlumno.numLista;
   alumnoSave.nombre = infoAlumno.nombre;
   alumnoSave.edad = infoAlumno.edad;
   alumnoSave.genero = infoAlumno.genero;

   Alumno.findOne({numLista: alumnoSave.numLista}).exec((err, alumno) => {
      if(err) return res.status(500).json({ status: 500, msg: err})

      if(alumno) return res.status(200).json({ status: 200, msg: "Ya existe un alumno creado con el número de lista"});

      alumnoSave.save((err, alumno) => {
         if(err) return res.status(500).json({ status: 500, msg: err})

         if(!alumno) return res.status(200).json({ status: 200, msg: "El alumno no fue registrado"})

         return res.status(200).json({
            status: 200,
            msg: "Alumno registrado satisfactoriamente",
            data: alumno
         })
      });
   })
}

exports.actualizarAlumno = (req, res) => {
   /* Validación de datos */
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
   }

   const {nombre, edad, genero} = req.body;
   const numLista = req.params.numLista;

   const infoAlumnoUpdate = {
      nombre,
      edad,
      genero
   }

   Alumno.findOneAndUpdate({numLista}, infoAlumnoUpdate, {new: true}, (err, alumnoUpdate) => {
      if(err) return res.status(500).json({msg: "Error al actualizar el alumno"});

      if(!alumnoUpdate) return res.status(404).json({ status: 404, msg: "No existe el alumno a actualizar"});

      return res.status(200).json({
         status: 200,
         msg: "Alumno actualizado satisfactoriamente",
         data: alumnoUpdate
      })
   });
}

exports.eliminarAlumno = (req, res) => {

   const numLista = req.params.numLista;

   Alumno.findOneAndRemove({numLista}, (err, alumnoDelete) => {
      if(err) return res.status(500).json({msg: "Error al eliminar el alumno"});

      if(!alumnoDelete) return res.status(404).json({ status: 404, msg: "No existe el alumno a eliminar"});

      return res.status(200).json({
         status: 200,
         msg: "Alumno eliminado satisfactoriamente",
         data: alumnoDelete
      })
   });
}