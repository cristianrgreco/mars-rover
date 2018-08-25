const nextLocation = require("./location");
const { NORTH, SOUTH, EAST, WEST } = require("./constants");

describe("nextLocation", () => {
  it("should return the next location", () => {
    const direction = NORTH;
    const grid = { x: 1, y: 1 };
    const location = { x: 0, y: 0 };

    expect(nextLocation(direction, grid, location)).toEqual({ x: 0, y: 1 });
  });

  it("should not move outside the grid", () => {
    const testCases = [
      () => {
        const direction = NORTH;
        const grid = { x: 1, y: 1 };
        const location = { x: 0, y: 1 };

        expect(nextLocation(direction, grid, location)).toEqual({ x: 0, y: 1 });
      },
      () => {
        const direction = SOUTH;
        const grid = { x: 1, y: 1 };
        const location = { x: 0, y: 0 };

        expect(nextLocation(direction, grid, location)).toEqual({ x: 0, y: 0 });
      },
      () => {
        const direction = EAST;
        const grid = { x: 1, y: 1 };
        const location = { x: 1, y: 0 };

        expect(nextLocation(direction, grid, location)).toEqual({ x: 1, y: 0 });
      },
      () => {
        const direction = WEST;
        const grid = { x: 1, y: 1 };
        const location = { x: 0, y: 0 };

        expect(nextLocation(direction, grid, location)).toEqual({ x: 0, y: 0 });
      }
    ];

    testCases.forEach(testCase => testCase());
  });
});
