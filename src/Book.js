const LibraryItem = require("../src/LibraryItem.js");

class Book extends LibraryItem {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
}

module.exports = Book;
