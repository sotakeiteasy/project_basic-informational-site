const express = require("express");
const app = express();
const path = require("node:path");
const authorRouter = require("./routes/authorRouter")
const bookRouter = require("./routes/bookRouter")
const indexRouter = require("./routes/indexRouter")

const assetsPath = path.join(__dirname, "public");

const links = [
    { href: "/", text: "Main page" },
    { href: "/about", text: "About" },
    { href: "/contact-me", text: "Contact me" },
];
const currentYear = new Date().getFullYear();

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", (req, res, next) => {
    req.links = links;
    req.currentYear = currentYear;
    next();
}, authorRouter);
app.use("/books", (req, res, next) => {
    req.links = links;
    req.currentYear = currentYear;
    next();
}, bookRouter);
app.use("/", (req, res, next) => {
    req.links = links;
    req.currentYear = currentYear;
    next();
}, indexRouter);

app.use((req, res, next) => {
    res.status(404);

    res.render('404', {
        url: req.originalUrl,
        links: links,
        currentYear: currentYear,
    })
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on - http://localhost:8080")
})
