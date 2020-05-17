const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect(
  'mongodb+srv://unsignedOrange:b7LVHaXgrcvqNq2S@cluster0-2yitf.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.get('/', function(req, res) {
  res.send('I am alive');
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
