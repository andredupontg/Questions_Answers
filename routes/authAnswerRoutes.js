const express = require("express");
const router = express.Router();
const authAnswerController = require("../controllers/authAnswerController");

router.route("/authAnswer/:respuesta")
    .get(authAnswerController.mostrarRespuesta)
    .post(authAnswerController.marcarRespuesta);

module.exports = router;