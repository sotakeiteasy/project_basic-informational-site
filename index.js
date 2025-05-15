const http = require('http');
const url = require('url');
const fs = require('fs');

const path = require("path");

const staticFiles = {
    '/': './pages/index.html',
    '/index.html': './pages/index.html',
    '/about.html': './pages/about.html',
    '/contact-me.html': './pages/contact-me.html',
    '/styles.css': './styles.css'
};

http.createServer(function (req, res) {
    let contentType = 'text/html';
    const q = url.parse(req.url, true);
    let __filename = staticFiles[q.pathname] || './pages/404.html';

    const extname = path.extname(__filename);
    if (extname === '.css') contentType = 'text/css';    

    fs.readFile(__filename, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end("Server error");
        }

        res.writeHead(__filename === './pages/404.html' ? 404 : 200, { 'Content-type': contentType })
        res.write(data);
        return res.end()
    })
}).listen(8080, () => console.log("Server is running on - http://localhost:8080"));