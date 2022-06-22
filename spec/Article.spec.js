const Article = require("../src/Article.js");
const Author = require("../src/Author.js");

describe("Article", () => {
  let article;
  let author;
  beforeEach(() => {
    author = new Author("Someone", "1234567");
    article = new Article("My Lovely Book", author);
  });

  describe("#constructor", () => {
    it("has a title", () => {
      expect(article.title).toEqual("My Lovely Book");
    });

    it("is not on loan", () => {
      expect(article.isOnLoan()).toEqual(false);
    });

    it("is has an author", () => {
      expect(article.author.name).toEqual("Someone");
      expect(article.author.pubTeleNum).toEqual("1234567");
    });
  });

  describe("#checkOut", () => {
    it("sets the article to be on loan", () => {
      article.checkOut();
      expect(article.isOnLoan()).toEqual(true);
    });

    it("raises an error if the article is already on loan", () => {
      article.checkOut();
      expect(() => article.checkOut()).toThrowError(
        "item is currently on loan"
      );
    });
  });

  describe("#checkIn", () => {
    it("sets the article to not be on loan", () => {
      article.checkOut();
      article.checkIn();
      expect(article.isOnLoan()).toEqual(false);
    });

    it("raises an error if the article is not on loan", () => {
      expect(() => article.checkIn()).toThrowError(
        "item is not currently on loan"
      );
    });
  });
});
