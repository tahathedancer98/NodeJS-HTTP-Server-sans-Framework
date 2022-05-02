const http = require('http');
const fs = require('fs');

function handler(req, res) {
    try{
        if(req.url === '/' && req.method != "GET"){
            res.writeHead(200, {'Content-type':'text/plain'});
            const data = fs.readFileSync('./public/Not-authorized.html', 'utf8')
            res.write(data)
            res.end();
        }else if(req.url === '/' && req.method == "GET"){
            res.writeHead(200, {'Content-type':'text/plain'});
            const data = fs.readFileSync('./public/index.html', 'utf8')
            res.write(data)
            res.end();
        }
        else {
            res.writeHead(404, {'Content-type':'text/plain'});
            const data = fs.readFileSync('./public/not-found.html', 'utf8')
            res.write(data)
            res.end();
        };
    }catch(e){
        res.writeHead(500, {'Content-type':'text/plain'});
        const data = fs.readFileSync('./public/server-error.html', 'utf8')
        res.write(data)
        res.end();
    }
    
}

const server = http.createServer(handler);

server.listen(5000);
console.log('Serveur écoute sur le port 5000')