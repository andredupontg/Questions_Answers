//? Modulos requeridos
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
require("dotenv").config();
const usuario = require("./models/usuario");

//? Configuracion de mi app
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//? Conexion a base de datos
mongoose.connect("mongodb+srv://adminAndre:" + process.env.PASSWORD + "@" + process.env.HOST + "/" + process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});

//? Listener de mi app
app.listen(3000, () => console.log("Server running on port 3000"));