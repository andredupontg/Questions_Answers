const express = require("express");
const router = express.Router();
const logInController = require("../controllers/logInController");

router.route("/logIn")
    .get(logInController.mostrarLogIn)
    .post(logInController.verificarUsuario);

module.exports = router;