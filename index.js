const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');



// Config
    // Tamplate Engine
        app.engine("handlebars", handlebars({defaultLayout: "main"}));
        app.set("view engine", "handlebars");
    // Bpdy Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
    // Conexão com o banco de dados
        const sequelize = new Sequelize('teste', 'root', 'root', {
            host: "localhost",
            dialect: 'mysql'
        });
// Rotas
        app.get("/cad", function(req, res){
            res.render("formulario");
        });

        app.post("/add", function(req, res){
            res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo);
        });

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});