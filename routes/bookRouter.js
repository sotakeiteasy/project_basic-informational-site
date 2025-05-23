const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All authors"));
bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ID: ${bookId}`);
})
bookRouter.get("/:bookId/reserve", (req, res) => {
    const { bookId, reserve } = req.params;
    res.send(`Book ID: ${bookId}, reserve status: ${reserve}`);
})
bookRouter.post("/:bookId/reserve", (req, res) => {
    const { bookId, reserve } = req.params;
    res.send(`POST query. Book ID: ${bookId}, reserve status: ${reserve}`);
})

module.exports = bookRouter;