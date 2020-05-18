const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  genre: String,
  age: Number,
});

module.exports = mongoose.model('Author', authorSchema);
