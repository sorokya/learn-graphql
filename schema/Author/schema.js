const schema = [
  `
  """
  this represents an author of a book
  """
  type Author {
    id: Int!
    name: String
    books: [Book]
  }
  `,
];

module.exports = schema;
