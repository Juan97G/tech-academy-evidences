'use strict';

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const MaestroController = require("../controllers/maestros");
const authMiddleware = require("../middlewares/authUser");

router.get("/",
   MaestroController.getMaestros
)

router.get("/:idMaestro",
   MaestroController.getMaestro
)

router.post("/",
   authMiddleware.userProtectUrl,
   [
      body("idMaestro").not().isEmpty(),
      body("nombre").not().isEmpty(),
      body("asignatura").not().isEmpty(),
      body("horasSemana").not().isEmpty(),
   ],
   MaestroController.crearMaestro
)

router.put("/:idMaestro",
   [
      body("idMaestro").not().isEmpty(),
      body("nombre").not().isEmpty(),
      body("asignatura").not().isEmpty(),
      body("horasSemana").not().isEmpty(),
   ],
   MaestroController.actualizarMaestro
)

router.delete("/:idMaestro",
   MaestroController.eliminarMaestro
)


module.exports = router;