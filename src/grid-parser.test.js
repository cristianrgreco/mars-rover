const GridParser = require("./grid-parser");

describe("GridParser", () => {
  it("should parse a grid", () => {
    const input = "5 6";

    const actual = new GridParser().parse(input);
    const expected = { x: 5, y: 6 };

    expect(actual).toEqual(expected);
  });
});
