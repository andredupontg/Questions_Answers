const express = require("express");
const router = express.Router();
const authQuestionsController = require("../controllers/authQuestionsController");

router.route("/authQuestions")
    .get(authQuestionsController.mostrarPreguntas)
    .post(authQuestionsController.crearPregunta);

module.exports = router;