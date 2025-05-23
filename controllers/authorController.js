const db = require("../models/db");
const asyncHandler = require('express-async-handler');
const CustomNotFoundError = require("../errors/customNotFoundError");

const getAuthorById = asyncHandler(async (req, res) => {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        throw new CustomNotFoundError("Author not found")
    }

    res.render("author", {author: author, links: req.links, currentYear: req.currentYear})
});

async function authors(req, res) {
    const allAuthors = await db.getAllAuthors();

    if (!allAuthors) {
        throw new CustomNotFoundError("Authors not found")
    }

    res.render("authors", {db: allAuthors, links: req.links, currentYear: req.currentYear})
}

module.exports = { getAuthorById, authors };