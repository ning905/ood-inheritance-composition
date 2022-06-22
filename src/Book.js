const LibraryItem = require("../src/LibraryItem.js");

class Book extends LibraryItem {
  constructor(title) {
    super(title);
  }
}

module.exports = Book;
