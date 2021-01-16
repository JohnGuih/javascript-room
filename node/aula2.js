var http = require('http');

http.createServer(function(red, res){
    res.end("Hello World! Welcome to my site :D");
}).listen(8081);

console.log("O Servidor esta rodando! :D");