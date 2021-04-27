const pregunta = require("../models/pregunta");
const Question = pregunta.Question;

const mostrarPreguntas = (req, res) => {
    if(req.isAuthenticated()){
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
    } else{
        res.redirect("/logIn");
    }
}

const crearPregunta = (req, res) => {
    if(req.isAuthenticated()){
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
    } else{
        res.redirect("/logIn");
    }
}

module.exports = {
    mostrarPreguntas,
    crearPregunta
}