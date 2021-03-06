const chunk = require("./chunk");

describe("chunk", () => {
  it("should return an array in chunks", () => {
    const array = [1, 2, 3, 4];
    const chunkSize = 2;

    expect(chunk(array, chunkSize)).toEqual([[1, 2], [3, 4]]);
  });
});
