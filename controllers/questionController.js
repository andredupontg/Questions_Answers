const pregunta = require("../models/pregunta");
const Question = pregunta.Question;
const respuesta = require("../models/respuesta");
const Answer = respuesta.Answer;

const mostrarPreguntaRespuesta = (req, res) => {
    const parametro = req.params.pregunta;
    const pregunta = parametro.substring(1, parametro.length);
    Question.findOne({title: pregunta}, (err, questionFound) => {
        if(!err){
            if(questionFound){
                Question.findOne({title: pregunta}, (err, questionFound) => {
                    if(!err){
                        if(questionFound){
                            Answer.find({question: questionFound}, (err, answersFound) => {
                                if(!err){
                                    res.render("question", {question: questionFound, answers: answersFound});
                                } else{
                                    res.send(err);
                                }
                            });
                        } else{
                            res.send("No existe esa pregunta!");
                        }
                    } else{
                        res.send(err);
                    }
                });
            } else{
                res.send("No existe esa pregunta!");
            }
        } else{
            res.send(err);
        }
    });
}

module.exports = {
    mostrarPreguntaRespuesta,
}