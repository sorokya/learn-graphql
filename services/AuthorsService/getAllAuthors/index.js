const getAllAuthors = async (context) => {
  const {
    models: { Author },
  } = context;

  const authors = await Author.getAll();
  return authors;
};

module.exports = getAllAuthors;
