const authors = require("../../database/authors");

const add = (name) => {
  const author = {
    id: authors.length + 1,
    name,
  };

  authors.push(author);

  return author;
};
const getAll = () => authors;
const findById = (id) => authors.find((author) => author.id === id);

module.exports = { add, getAll, findById };
