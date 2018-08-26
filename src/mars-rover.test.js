const { NORTH, MOVE, TURN_RIGHT } = require("./constants");
const Location = require("./location");
const Direction = require("./direction");
const MarsRover = require("./mars-rover");

describe("MarsRover", () => {
  it("should move in a specified direction", () => {
    const grid = { x: 1, y: 1 };
    const location = new Location(grid, { x: 0, y: 0 });
    const direction = new Direction(NORTH);

    const result = new MarsRover(location, direction)
      .execute(MOVE)
      .execute(TURN_RIGHT)
      .execute(MOVE)
      .getLocation();

    expect(result).toBe("1 1 E");
  });
});
