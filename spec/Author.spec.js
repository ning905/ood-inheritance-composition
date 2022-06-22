const Author = require("../src/Author.js");

describe("Newspaper", () => {
  let author;
  beforeEach(() => {
    author = new Author("Someone", "1234567");
  });

  describe("#constructor", () => {
    it("has a name", () => {
      expect(author.name).toEqual("Someone");
    });

    it("has a publisher telephone number", () => {
      expect(author.pubTeleNum).toEqual("1234567");
    });
  });
});
