const http = require('http');

function handler(req, res) {
    console.log(req)
    if(req.url === '/'  && req.method != "GET"){
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write(`<h1>${req.statusCode} Méthode non authorisée`);
        res.end();
    }else {
        res.writeHead(404, {'Content-type':'text/plain'});
        res.write(`<h1>${req.statusCode} Page Introuvable</h1>`);
        res.end();
    };
}

const server = http.createServer(handler);

server.listen(3000);