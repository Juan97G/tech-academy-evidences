'use strict';

const Usuario = require("../models/Usuario");
const Session = require("../models/Session");
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");


exports.login = (req, res) => {
   /* Validación de datos */
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
   }

   const {mail, password} = req.body;

   Usuario.findOne({mail, password}).exec((err, usuario) => {
      if(err) return res.status(500).json({ status: 500, msg: err})

      if(!usuario) return res.status(404).json({ status: 404, msg: "Datos inválidos, intenta de nuevo"})

      const payload = {
         idUser: usuario.id
      }

      const accessToken = jwt.sign(payload, "TH5d1LhewAxi9odetHut0dRLracha3", {
         expiresIn: "1d"
      });

      const sessionUpdate = {
         userId: usuario.id,
         jwt: accessToken
      }

      Session.findOneAndUpdate({userId: usuario.id}, sessionUpdate, {upsert: true, new: true}, (err, sessionsUpd) => {
         if(err) return res.status(500).json({ status: 500, msg: err})

         if(!sessionsUpd) return res.status(404).json({ status: 404, msg: "Datos inválidos, intenta de nuevo"});

         return res.status(200).json({
            status: 200,
            msg: "Autenticación correcta",
            token: accessToken
         })
      });
   });

}

exports.logout = (req, res) => {

   Session.findOneAndRemove({userId: req.decoded.idUser}, (err, sessionDelete) => {
      if(err) return res.status(500).json({ status: 500, msg: err})
      if(!sessionDelete) return res.status(404).json({ status: 404, msg: "Datos inválidos, intenta de nuevo"});

      return res.status(200).json({
         status: 200,
         msg: "Sesión terminada correctamente"
      });
   })
}