'use strict';

const mongoose = require("mongoose");

const UsuariosSchema = new mongoose.Schema({
   mail: {
      type: String,
      require: true,
      unique: true
   },
   
   password: {
      type: String,
      require: true
   }
});

module.exports = mongoose.model("usuarios", UsuariosSchema);