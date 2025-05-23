const { Router } = require("express");
const authorController = require('../controllers/authorController');

const authorRouter = Router();

authorRouter.get("/", authorController.authors);
authorRouter.get("/:authorId", authorController.getAuthorById)

module.exports = authorRouter;