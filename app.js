//? Modulos requeridos
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const homeRoutes = require("./routes/homeRoutes");
const logInRoutes = require("./routes/logInRoutes");
const signUpRoutes = require("./routes/signUpRoutes");

//? Configuracion de mi app
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//? Conexion a base de datos
mongoose.connect("mongodb+srv://adminAndre:" + process.env.PASSWORD + "@" + process.env.HOST + "/" + process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});


app.use(homeRoutes);
app.use(logInRoutes);
app.use(signUpRoutes);

//? Listener de mi app
app.listen(3000, () => console.log("Server running on port 3000"));