const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require('sequelize');



// Config
    // Tamplate Engine
        app.engine("handlebars", handlebars({defaultLayout: "main"}));
        app.set("view engine", "handlebars");
    // Conexão com o banco de dados
        const sequelize = new Sequelize('teste', 'root', 'root', {
            host: "localhost",
            dialect: 'mysql'
        });


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});