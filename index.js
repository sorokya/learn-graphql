const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const app = express();

const authors = [
	{ id: 1, name: 'J. K. Rowling' },
	{ id: 2, name: 'J. R. R. Tolkien' },
	{ id: 3, name: 'Brent Weeks' }
];

const books = [
	{ id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
	{ id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
	{ id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
	{ id: 5, name: 'The Two Towers', authorId: 2 },
	{ id: 6, name: 'The Return of the King', authorId: 2 },
	{ id: 7, name: 'The Way of Shadows', authorId: 3 },
	{ id: 8, name: 'Beyond the Shadows', authorId: 3 }
];

const typeDefs = `
  """
  this represents an author of a book
  """
  type Author {
    id: Int!
    name: String
    books: [Book]
  }

  """
  this represents a book written by an author
  """
  type Book {
    id: Int!
    name: String!
    authorId: Int!
    author: Author
  }

  type Query {
    """
    A single book
    """
    book(id: Int!): Book
    """
    A list of books
    """
    books: [Book]
    """
    A single author
    """
    author(id: Int!): Author
    """
    A list of authors
    """
    authors: [Author]
  }

  type Mutation {
    """
    Add a book
    """
    addBook (
      name: String!
      authorId: Int!
    ): Book
    """
    Add an author
    """
    addAuthor (
      name: String!
    ): Author
  }
`

const resolvers = {
  Query: {
    book: (_, { id }) => books.find(book => book.id === id),
    books: () => books,
    author: (_, { id }) => authors.find(author => author.id === id),
    authors: () => authors,
  },
  Mutation: {
    addBook: (_, { name, authorId }) => {
      const book = {
          id: books.length + 1, 
          name, 
          authorId, 
        };
        books.push(book);
        return book;
    },
    addAuthor: (_, { name }) => {
      const author = {
          id: authors.length + 1, 
          name, 
        };
        authors.push(author);
        return author;
    }
  },
  Book: {
    author: book => authors.find((author) => author.id === book.authorId),
  },
  Author: {
    books: author => books.filter((book) => book.authorId === author.id),
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(5000, () => console.log('Server listening at http://localhost:5000'));