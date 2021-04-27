const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.route("/questions/:pregunta")
    .get(questionController.mostrarPreguntaRespuesta);

module.exports = router;