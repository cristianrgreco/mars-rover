const nextLocation = require("./location");
const { NORTH } = require("./constants");

describe("nextLocation", () => {
  it("should return the next location", () => {
    const direction = NORTH;
    const grid = { x: 1, y: 1 };
    const location = { x: 0, y: 0 };

    expect(nextLocation(direction, grid, location)).toEqual({ x: 0, y: 1 });
  });

  it("should return the next location without leaving the grid", () => {
    const direction = NORTH;
    const grid = { x: 1, y: 1 };
    const location = { x: 0, y: 1 };

    expect(nextLocation(direction, grid, location)).toEqual({ x: 0, y: 1 });
  });
});
