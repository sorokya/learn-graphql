const getAllBooks = async (context) => {
  const {
    models: { Book },
  } = context;

  const books = await Book.getAll();
  return books;
};

module.exports = getAllBooks;
