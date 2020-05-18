const Book = require('../models/book');
const Author = require('../models/author');

/**
 * Fetches a single book from mongodb
 * @param id
 * @return {Book}
 */
function getBook(id) {
  return Book.findById(id);
}

/**
 * Fetches single author from mongodb
 * @param id
 * @return {Author}
 */
function getAuthor(id) {
  console.log('Author', id);
  return Author.findById(id);
}

/**
 * Fetches all Books from mongodb
 * @return {Book[]}
 */
function getBooks() {
  return Book.find({});
}

/**
 * Fetches all Authors from mongodb
 * @return {Author[]}
 */
function getAuthors() {
  return Author.find({});
}

const resolvers = {
  Query: {
    books: () => books,
  },
};

/*
    authors: () => getAuthors(),
    book: (_source, query) => {
      return getBook(query.id);
    },
    author: (_source, query) => {
      return getAuthor(query.id);
    },
* */

module.export = resolvers;
