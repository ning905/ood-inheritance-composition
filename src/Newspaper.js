const LibraryItem = require("./LibraryItem");

class Newspaper extends LibraryItem {
  constructor(title) {
    super(title);
  }

  checkIn() {
    throw new Error("newspapers are not available for loan");
  }

  checkOut() {
    throw new Error("newspapers are not available for loan");
  }
}

module.exports = Newspaper;
