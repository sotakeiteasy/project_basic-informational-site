// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// const path = require("path");

// const staticFiles = {
//     '/': './pages/index.html',
//     '/index.html': './pages/index.html',
//     '/about.html': './pages/about.html',
//     '/contact-me.html': './pages/contact-me.html',
//     '/styles.css': './styles.css'
// };

// http.createServer(function (req, res) {
//     let contentType = 'text/html';
//     const q = url.parse(req.url, true);
//     let __filename = staticFiles[q.pathname] || './pages/404.html';

//     const extname = path.extname(__filename);
//     if (extname === '.css') contentType = 'text/css';

//     fs.readFile(__filename, function (err, data) {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' })
//             return res.end("Server error");
//         }

//         res.writeHead(__filename === './pages/404.html' ? 404 : 200, { 'Content-type': contentType })
//         res.write(data);
//         return res.end()
//     })
// }).listen(8080, () => console.log("Server is running on - http://localhost:8080"));




// EXPRESS

// app.get(["/", "/index.html"], (req, res) => {
//     res.sendFile(path.join(__dirname, "pages", "index.html"))
// })

// app.get("/about.html", (req, res) => {
//     res.sendFile(path.join(__dirname, "pages", "about.html"))
// })

// app.get("/contact-me.html", (req, res) => {
//     res.sendFile(path.join(__dirname, "pages", "contact-me.html"))
// })

// app.get("/styles.css", (req, res) => {
//     res.sendFile(path.join(__dirname, "styles.css"))
// })

// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "pages", "404.html"))
// })

// const express = require("express");
// const path = require("path");

// const app = express();

// app.use(express.static(path.join(__dirname, "pages")));
// app.use(express.static(__dirname));

// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, "pages", "404.html"))
// })

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "pages", "index.html"))
// })

// const PORT = 8080;
// app.listen(PORT, () => {
//     console.log("Server is running on - http://localhost:8080")
// })


const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter")
const bookRouter = require("./routes/bookRouter")
const indexRouter = require("./routes/indexRouter")

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on - http://localhost:8080")
})
