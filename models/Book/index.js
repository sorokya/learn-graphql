const books = require("../../database/books");

const add = (name, authorId) => {
  const book = {
    id: books.length + 1,
    name,
    authorId,
  };

  books.push(book);

  return book;
};
const getAll = () => books;
const findById = (id) => books.find((book) => book.id === id);
const findByAuthorId = (authorId) =>
  books.filter((book) => book.authorId === authorId);

module.exports = { add, getAll, findById, findByAuthorId };
