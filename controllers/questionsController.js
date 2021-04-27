const pregunta = require("../models/pregunta");
const Question = pregunta.Question;

const mostrarPreguntas = (req, res) => {
    Question.find({}, (err, questions) => {
        if(!err){
            if(questions){
                const sortedQuestions = [...questions].reverse();
                res.render("questions", {questions: sortedQuestions});
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