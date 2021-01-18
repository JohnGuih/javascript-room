const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.sendFile(__dirname + "/html/blog.html");
});

//So pode aver uma .send em cada função
app.get('/ola/:nome', function(req, res){
    res.send("<h1>Bem-vindo senhor " + req.params.nome + "</h1>");
});


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});