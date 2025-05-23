function index(req, res) {
    res.render("index", { links: req.links, currentYear: req.currentYear });
}

function about(req, res) {
    res.render("about", { links: req.links, currentYear: req.currentYear });
}

function contactMe(req, res) {
    res.render("contact-me", { links: req.links, currentYear: req.currentYear });
}

module.exports = { index, about, contactMe };
