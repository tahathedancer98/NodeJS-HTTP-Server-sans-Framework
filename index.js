const http = require('http');
const fs = require('fs');

function handler(req, res) {
    try{
        if(req.url === '/' && req.method != "GET"){
            res.writeHead(200, {'Content-type':'text/html'});
            const data = fs.readFileSync('./public/Not-authorized.html', 'utf8')
            res.write(data)
            res.end();
        }else if(req.url === '/' && req.method == "GET"){
            res.writeHead(200, {'Content-type':'text/html'});
            const data = fs.readFileSync('./public/index.html', 'utf8')
            res.write(data)
            res.end();
        }else if(req.url == "/public/images/image.png"){
            res.writeHead(200, {'Content-Type': 'image/png'});
            const data = fs.readFileSync('./public/index.html', 'utf8')
            res.write(data)
            res.end('');
        }
        else if(req.url == "/public/css/style.css" && req.method == "GET"){
            res.writeHead(200, {'Content-Type': 'text/css'});
            const data = fs.readFileSync('./public/style/style.js', 'utf8')
            res.write(data)
            res.end('');
        }
        else if(req.url == "/public/js/script.js" && req.method == "GET"){
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            const data = fs.readFileSync('./public/script/script.js', 'utf8')
            res.write(data)
            res.end('');
        }
        else {
            res.writeHead(404, {'Content-type':'text/html'});
            const data = fs.readFileSync('./public/not-found.html', 'utf8')
            res.write(data)
            res.end();
        };
    }catch(e){
        res.writeHead(500, {'Content-type':'text/html'});
        const data = fs.readFileSync('./public/server-error.html', 'utf8')
        res.write(data)
        res.end();
    }    
}
const server = http.createServer(handler);

server.listen(5000);
console.log('Serveur écoute sur le port 5000')