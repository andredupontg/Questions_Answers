const pregunta = require("../models/pregunta");
const Question = pregunta.Question;

const mostrarPreguntas = (req, res) => {
    Question.find({}, (err, questions) => {
        if(!err){
            if(questions){
                res.render("authQuestions", {questions: questions});
            } else{
                res.send("No hay preguntas!");
            }
        } else{
            res.send(err);
        }
    });
}

const crearPregunta = (req, res) => {
    Question.findOne({title: req.body.title}, (err, questionFound) => {
        if(!err){
            if(!questionFound){
                const question = new Question({
                    title: req.body.title,
                    content: req.body.content
                });
                question.save();
                res.redirect("/authQuestions");
            } else{
                res.send("Ya existe la pregunta!");
            }
        } else{
            res.send(err);
        }
    });
}

module.exports = {
    mostrarPreguntas,
    crearPregunta
}