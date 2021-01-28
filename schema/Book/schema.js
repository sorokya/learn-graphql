const schema = [
  `
  """
  this represents a book written by an author
  """
  type Book {
    id: Int!
    name: String!
    authorId: Int!
    author: Author
  }
  `,
];

module.exports = schema;
