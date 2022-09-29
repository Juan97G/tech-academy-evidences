'use strict';

const Session = require("../models/Session");
const jwt = require("jsonwebtoken");

exports.userProtectUrl = (req, res, next) => {

   const token = req.headers['access-token'];

   if(token) {
      jwt.verify(token, "TH5d1LhewAxi9odetHut0dRLracha3", (err, decoded) => {
         if(err){
            return res.status(403).send({msg: "Token no válido"})
         } else {
            req.decoded = decoded;

            Session.findOne({userId: req.decoded.idUser, jwt: token}).exec((err, session) => {
               if(err) return res.status(500).send({msg: "Error al leer datos de sesión"});
               if(!session) return res.status(404).send({msg: "Los datos de autenticación no son válidos"});

               next();
            })
         }
      });
   } else {
      res.status(403).send({msg: "Token no válido"});
   }
}