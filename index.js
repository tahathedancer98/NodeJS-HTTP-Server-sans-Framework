const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer();

app.get('/', function(req, res) {
    res.send('<h1>HELLO WORLD TAHA </h1>')
});
server.listen(5000);
console.log('Serveur écoute sur le port 5000');