const { Router } = require('express');
const indexController = require("../controllers/indexController")

const indexRouter = Router();

indexRouter.get('/', indexController.index);
indexRouter.get('/about', indexController.about);
indexRouter.get('/contact-me', indexController.contactMe);

module.exports = indexRouter;
