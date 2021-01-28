const resolvers = {
  Author: {
    books: async ({ id: authorId }, _, context) => {
      const {
        services: { BooksService },
      } = context;

      const books = BooksService.getBooksForAuthor(
        {
          authorId,
        },
        context
      );

      return books;
    },
  },
};

module.exports = resolvers;
