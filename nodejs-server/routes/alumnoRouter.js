'use strict';

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const AlumnosController = require("../controllers/alumnos");
const authMiddleware = require("../middlewares/authUser");

router.get("/",
   AlumnosController.getAlumnos
);

router.get("/:numLista",
   AlumnosController.getAlumno
);

router.post("/",
   authMiddleware.userProtectUrl,
   [
      body("numLista").not().isEmpty(),
      body("nombre").not().isEmpty(),
      body("edad").not().isEmpty(),
      body("genero").not().isEmpty()
   ],
   AlumnosController.crearAlumno
);

router.put("/:numLista",
   [
      body("nombre").not().isEmpty(),
      body("edad").not().isEmpty(),
      body("genero").not().isEmpty()
   ],
   AlumnosController.actualizarAlumno
);

router.delete("/:numLista",
   AlumnosController.eliminarAlumno
);

module.exports = router;