const resolvers = {
  Book: {
    author: async ({ authorId }, _, context) => {
      const {
        services: { AuthorsService },
      } = context;

      const author = await AuthorsService.getAuthorById(
        { id: authorId },
        context
      );
      return author;
    },
  },
};

module.exports = resolvers;
