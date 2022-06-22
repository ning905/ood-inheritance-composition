class LibraryItem {
  constructor(title) {
    this.title = title;
    this.onLoan = false;
  }

  isOnLoan() {
    return this.onLoan;
  }

  checkIn() {
    throw new Error("newspapers are not available for loan");
  }

  checkOut() {
    throw new Error("newspapers are not available for loan");
  }
}

module.exports = LibraryItem;
