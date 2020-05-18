const Book = require('../models/book');
const Author = require('../models/author');

const resolvers = {
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
  Book: {
    author(parent){
      return Author.findById(parent.authorId)
    }
  },
  Author: {
    books(parent){
      return Book.find({ authorId: parent.id })
    }
  }
};

module.exports = resolvers;
