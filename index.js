const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema/type-defs');
const resolvers = require('./resolver/resolver');

mongoose.connect(
  'mongodb+srv://unsignedOrange:b7LVHaXgrcvqNq2S@cluster0-2yitf.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
