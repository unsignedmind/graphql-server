const Book = require('../models/book');
const Author = require('../models/author');

const resolvers = {
  Book: {
    author(parent) {
      return Author.findById(parent.authorId);
    },
  },
  Author: {
    books(parent) {
      return Book.find({ authorId: parent.id });
    },
  },
  Query: {
    books: (parent) => Book.find({}),
    authors: (parent) => Author.find({}),
    book: (parent, args) => {
      return Book.findById(args.id);
    },
    author: (parent, args) => {
      return Author.findById(args.id);
    },
  },
  Mutation: {
    addAuthor: (parent, args) => {
      const author = new Author({
        name: args.name,
        age: args.age,
      });
      return author.save();
    },
    addBook: (parent, args) => {
      const book = new Book({
        name: args.name,
        genre: args.genre,
        authorId: args.authorId,
      });
      return book.save();
    },
  },
};

module.exports = resolvers;
