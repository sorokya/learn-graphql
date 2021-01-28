const getAuthorById = async ({ id }, context) => {
  const {
    models: { Author },
  } = context;

  const author = await Author.findById(id);

  return author;
};

module.exports = getAuthorById;
