const addBook = async ({ name, authorId }, context) => {
  const {
    models: { Book },
  } = context;

  const book = await Book.add(name, authorId);

  return book;
};

module.exports = addBook;
