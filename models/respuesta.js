const mongoose = require("mongoose");
const pregunta = require("./pregunta");
const usuario = require("./usuario");

const answerSchema = new mongoose.Schema({
    question: {type: pregunta.questionSchema, required: true},
    content: {type: String, required: true},
    correct: {type: Boolean, default: false}
});

const Answer = new mongoose.model("Answer", answerSchema);

module.exports = {
    answerSchema,
    Answer
}