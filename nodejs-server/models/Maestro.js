"use strict";

const mongoose = require("mongoose");

const MaestroSchema = new mongoose.Schema({
   idMaestro: {
      type: Number,
      required: true,
      unique: true
   },

   nombre: {
      type: String,
      required: true
   },

   asignatura: {
      type: String,
      required: true
   },

   horasSemana: {
      type: Number,
      required: true
   },
});

module.exports = mongoose.model("maestros", MaestroSchema);