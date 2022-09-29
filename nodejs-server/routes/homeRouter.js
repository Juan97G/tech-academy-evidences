'use strict';

const express = require("express");
const router = express.Router();

const WelcomeController = require("../controllers/welcome");

router.get("/", WelcomeController.welcome);

module.exports = router;