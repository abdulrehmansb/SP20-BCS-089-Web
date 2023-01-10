const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title: String,
  price: Number,
  author: String,
  description: String,
  image: String,
  tags: [String],
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
