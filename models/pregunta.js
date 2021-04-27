const mongoose = require("mongoose");
const usuario = require("./usuario");

const questionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    user: {type: usuario.userSchema, required: true}
});

const Question = new mongoose.model("Question", questionSchema);

module.exports = {
    questionSchema,
    Question
}