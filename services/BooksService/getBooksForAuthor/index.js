const getBooksForAuthor = async ({ authorId }, context) => {
  const {
    models: { Book },
  } = context;

  const books = await Book.findByAuthorId(authorId);
  return books;
};

module.exports = getBooksForAuthor;
