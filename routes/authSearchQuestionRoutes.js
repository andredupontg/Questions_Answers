const express = require("express");
const router = express.Router();
const authSearchQuestionController = require("../controllers/authSearchQuestionController");

router.route("/authSearchQuestion")
    .post(authSearchQuestionController.buscarPregunta);

module.exports = router;
