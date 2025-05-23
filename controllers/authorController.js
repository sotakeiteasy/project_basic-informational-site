const db = require("../db");
const asyncHandler = require('express-async-handler');
const CustomNotFoundError = require("../errors/customNotFoundError");

const getAuthorById = asyncHandler(async (res, req) => {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        throw new CustomNotFoundError("Author not found")
    }

    res.send(`Author Name: ${author.name}`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
})

module.exports = { getAuthorById };