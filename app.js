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
const authQuestionsRoutes = require("./routes/authQuestionsRoutes");
const authQuestionRoutes = require("./routes/authQuestionRoutes");
const authSearchQuestionRoutes = require("./routes/authSearchQuestionRoutes");
const questionsRoutes = require("./routes/questionsRoutes");
const questionRoutes = require("./routes/questionRoutes");
const searchQuestionRoutes = require("./routes/searchQuestionRoutes");

//? Configuracion de mi app
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//? Conexion a base de datos
mongoose.connect("mongodb+srv://adminAndre:" + process.env.PASSWORD + "@" + process.env.HOST + "/" + process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});

//? Funcionalidad de la app
app.use(homeRoutes);
app.use(logInRoutes);
app.use(signUpRoutes);
app.use(authQuestionsRoutes);
app.use(authQuestionRoutes);
app.use(authSearchQuestionRoutes);
app.use(questionsRoutes);
app.use(questionRoutes);
app.use(searchQuestionRoutes);

//? Listener de mi app
app.listen(3000, () => console.log("Server running on port 3000"));