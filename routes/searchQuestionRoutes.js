const express = require("express");
const router = express.Router();
const searchQuestionController = require("../controllers/searchQuestionController");

router.route("/searchQuestion")
    .post(searchQuestionController.buscarPregunta);

module.exports = router;
