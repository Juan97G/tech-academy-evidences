'use strict';

const mongoose = require("mongoose");

const AlumnosSchema = new mongoose.Schema({
   numLista: {
      type: Number,
      required: true,
      unique: true
   },
   nombre: {
      type: String,
      require: true
   },
   edad: {
      type: Number,
      require: true
   },
   genero: {
      type: String,
      require: true
   },

});

module.exports = mongoose.model("alumnos", AlumnosSchema);