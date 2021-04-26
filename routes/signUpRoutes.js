const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");

router.route("/signUp") 
    .get(signUpController.mostrarSignUp)
    .post(signUpController.crearUsuario);

module.exports = router;