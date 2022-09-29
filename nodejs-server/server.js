'use strict';

const mongoose = require("mongoose");
const app = require("./app");
const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/techacademy-nodejs")
   .then(() => {
      console.log("Conexión de BD corriendo");

      /* Corriendo la BD se crea el servidor */
      const server = app.listen(port, () => {
         console.log(`Servidor corriendo en puerto: ${port}`);
      });
   })
   .catch((err) => {
      console.log(err);
   });

