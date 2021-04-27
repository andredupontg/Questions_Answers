const express = require("express");
const router = express.Router();
const authQuestionController = require("../controllers/authQuestionController");

router.route("/authQuestions/:pregunta")
    .get(authQuestionController.mostrarPreguntaRespuesta)
    .post(authQuestionController.responderPregunta);

module.exports = router;