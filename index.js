const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1>HELLO WORLD TAHA </h1>')
});

server.listen(5000);
