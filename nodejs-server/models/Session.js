'use strict';

const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
   userId: {
      type: String,
      require: true,
      unique: true
   },
   jwt: {
      type: String
   }
});

module.exports = mongoose.model("sessions", SessionSchema);