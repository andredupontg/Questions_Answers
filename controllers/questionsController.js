const pregunta = require("../models/pregunta");
const Question = pregunta.Question;

const mostrarPreguntas = (req, res) => {
    Question.find({}, (err, questions) => {
        if(!err){
            if(questions){
                res.render("questions", {questions: questions});
            } else{
                res.send("No hay preguntas!");
            }
        } else{
            res.send(err);
        }
    });
}

module.exports = {
    mostrarPreguntas,
}