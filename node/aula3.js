const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu site! :^)")
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog")
});

//So pode aver uma .send em cada função
app.get('/ola/:nome', function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>");
});


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});