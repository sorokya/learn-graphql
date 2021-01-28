const addAuthor = async ({ name }, context) => {
  const {
    models: { Author },
  } = context;

  const author = await Author.add(name);

  return author;
};

module.exports = addAuthor;
