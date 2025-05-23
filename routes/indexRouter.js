const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send("Home page"));
indexRouter.get('/about', (req, res) => res.send("About"));
indexRouter.get('/contact-me', (req, res) => res.send("Contact me"));
indexRouter.post('/contact-me', (req, res) => res.send("Contact me: POST     query"));

module.exports = indexRouter;
