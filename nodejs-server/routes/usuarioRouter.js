'use strict';

const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarios");
const authMiddleware = require("../middlewares/authUser");
const {body} = require("express-validator");

router.post("/login",
   [
      body("mail").not().isEmpty(),
      body("password").not().isEmpty()
   ],
   UsuarioController.login
);

router.post("/logout",
   authMiddleware.userProtectUrl,
   UsuarioController.logout
);

module.exports = router;