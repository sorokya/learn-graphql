const authorResolvers = require("./Author/resolvers");
const bookResolvers = require("./Book/resolvers");

const rootResolvers = {
  Query: {
    book: async (_, { bookId }, context) => {
      const {
        services: { BooksService },
      } = context;

      const book = await BooksService.getBookById(
        {
          id: bookId,
        },
        context
      );

      return book;
    },
    books: async (_, __, context) => {
      const {
        services: { BooksService },
      } = context;

      const books = await BooksService.getAllBooks(context);
      return books;
    },
    author: async (_, { authorId }, context) => {
      const {
        services: { AuthorsService },
      } = context;

      const author = await AuthorsService.getAuthorById(
        {
          id: authorId,
        },
        context
      );

      return author;
    },
    authors: async (_, __, context) => {
      const {
        services: { AuthorsService },
      } = context;

      const authors = await AuthorsService.getAllAuthors(context);
      return authors;
    },
  },
  Mutation: {
    addBook: async (_, { name, authorId }, context) => {
      const {
        services: { BooksService },
      } = context;

      const book = await BooksService.addBook(
        {
          name,
          authorId,
        },
        context
      );

      return book;
    },
    addAuthor: async (_, { name }, context) => {
      const {
        services: { AuthorsService },
      } = context;

      const author = await AuthorsService.addAuthor(
        {
          name,
        },
        context
      );

      return author;
    },
  },
};

module.exports = {
  ...rootResolvers,
  ...authorResolvers,
  ...bookResolvers,
};
