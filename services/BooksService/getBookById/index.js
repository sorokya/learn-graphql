const getBookById = async ({ id }, context) => {
  const {
    models: { Book },
  } = context;

  const book = await Book.findById(id);

  return book;
};

module.exports = getBookById;
