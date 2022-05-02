const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer();

app.get('/', function(req, res) {
    res.send(`<h1>${res.statusCode} Méthode non authorisée</h1>`)
});
server.listen(7000); 
console.log('Serveur écoute sur le port 5000');