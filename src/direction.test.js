const nextDirection = require("./direction");
const { NORTH, SOUTH, EAST, WEST, LEFT, RIGHT } = require("./constants");

describe("nextDirection", () => {
  it("should return the resulting direction", () => {
    expect(nextDirection(NORTH, RIGHT)).toBe(EAST);
    expect(nextDirection(NORTH, LEFT)).toBe(WEST);

    expect(nextDirection(SOUTH, RIGHT)).toBe(WEST);
    expect(nextDirection(SOUTH, LEFT)).toBe(EAST);

    expect(nextDirection(EAST, RIGHT)).toBe(SOUTH);
    expect(nextDirection(EAST, LEFT)).toBe(NORTH);

    expect(nextDirection(WEST, RIGHT)).toBe(NORTH);
    expect(nextDirection(WEST, LEFT)).toBe(SOUTH);
  });
});
