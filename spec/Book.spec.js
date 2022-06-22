const Book = require("../src/Book.js");
const Author = require("../src/Author.js");

describe("Book", () => {
  let book;
  let author;
  beforeEach(() => {
    author = new Author("Someone", "1234567");
    book = new Book("My Lovely Book", author);
  });

  describe("#constructor", () => {
    it("has a title", () => {
      expect(book.title).toEqual("My Lovely Book");
    });

    it("is not on loan", () => {
      expect(book.isOnLoan()).toEqual(false);
    });

    it("is has an author", () => {
      expect(book.author.name).toEqual("Someone");
      expect(book.author.pubTeleNum).toEqual("1234567");
    });
  });

  describe("#checkOut", () => {
    it("sets the book to be on loan", () => {
      book.checkOut();
      expect(book.isOnLoan()).toEqual(true);
    });

    it("raises an error if the book is already on loan", () => {
      book.checkOut();
      expect(() => book.checkOut()).toThrowError("item is currently on loan");
    });
  });

  describe("#checkIn", () => {
    it("sets the book to not be on loan", () => {
      book.checkOut();
      book.checkIn();
      expect(book.isOnLoan()).toEqual(false);
    });

    it("raises an error if the book is not on loan", () => {
      expect(() => book.checkIn()).toThrowError(
        "item is not currently on loan"
      );
    });
  });
});
