const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
    { id: 4, name: "Bryan2" },
    { id: 5, name: "Christian2" },
    { id: 6, name: "Jason2" },
    { id: 7, name: "Bryan3" },
    { id: 8, name: "Christian3" },
    { id: 9, name: "Jason3" },
];
  
async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId)
};

async function getAllAuthors() {
    return authors;
}

module.exports = { getAuthorById, getAllAuthors }