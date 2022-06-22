const LibraryItem = require("./LibraryItem");

class Article extends LibraryItem {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
}

module.exports = Article;
