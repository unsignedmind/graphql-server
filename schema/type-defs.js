const { gql } = require('apollo-server');

const typeDefs = gql`    
    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book!]
    }
    
    type Book {
        id: ID!
        name: String
        genre: String
        author: Author!
    }

    type Query {
        books: [Book]
        authors: [Author]
        book(id: ID!): Book
        author(id: ID!): Author
    }
    
    type Mutation {
        addAuthor(name: String!, age: Int!): Author
        addBook(name: String!, genre: String!, authorId: ID!): Book
    }
`;

module.exports = typeDefs;
