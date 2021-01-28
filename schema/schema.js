const authorSchema = require("./Author/schema");
const bookSchema = require("./Book/schema");

const rootSchema = [
  `
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
  `,
];

const schema = [...rootSchema, ...authorSchema, ...bookSchema];

module.exports = schema;
