const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json({
   parameterLimit: 100000,
   limit: '50mb',
   extended: false
}));

app.use("/", require("./routes/homeRouter"));
app.use("/alumnos", require("./routes/alumnoRouter"));
app.use("/usuarios", require("./routes/usuarioRouter"));
app.use("/maestros", require("./routes/maestroRouter"));

module.exports = app;