const { NORTH } = require("./constants");
const Location = require("./location");
const Direction = require("./direction");
const CommandsParser = require("./commands-parser");

describe("CommandsParser", () => {
  it("should parse command chunks into their individual components", () => {
    const grid = { x: 5, y: 5 };
    const commandChunk = ["1 2 N", "LMLMLMLMM"];

    const expected = {
      location: new Location(grid, { x: 1, y: 2 }),
      direction: new Direction(NORTH),
      commands: ["L", "M", "L", "M", "L", "M", "L", "M", "M"]
    };
    const actual = new CommandsParser().parse(grid, commandChunk);

    expect(actual).toEqual(expected);
  });
});
