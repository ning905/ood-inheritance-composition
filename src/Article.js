const LibraryItem = require("./LibraryItem");

class Article extends LibraryItem {
  constructor(title) {
    super(title);
  }
}

module.exports = Article;
