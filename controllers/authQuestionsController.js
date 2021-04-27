const pregunta = require("../models/pregunta");
const Question = pregunta.Question;
const usuario = require("../models/usuario");
const User = usuario.User;

const mostrarPreguntas = (req, res) => {
    if(req.isAuthenticated()){
        Question.find({}, (err, questions) => {
            if(!err){
                if(questions){
                    const sortedQuestions = [...questions].reverse();
                    res.render("authQuestions", {questions: sortedQuestions});
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
        User.findOne({username: req.body.username}, (err, userFound) => {
            if(!err){
                if(userFound){
                    Question.findOne({title: req.body.title}, (err, questionFound) => {
                        if(!err){
                            if(!questionFound){
                                const question = new Question({
                                    title: req.body.title,
                                    content: req.body.content.substring(3, req.body.content.length - 6),
                                    user: userFound
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
                    res.send("El usuario no existe");
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