const Direction = require("./direction");

const { NORTH, SOUTH, EAST, WEST, TURN_LEFT, TURN_RIGHT } = require("./constants");

describe("Direction", () => {
  it("should rotate from North", () => {
    expect(new Direction(NORTH).turn(TURN_RIGHT).getDirection()).toBe(EAST);
    expect(new Direction(NORTH).turn(TURN_LEFT).getDirection()).toBe(WEST);
  });

  it("should rotate from South", () => {
    expect(new Direction(SOUTH).turn(TURN_RIGHT).getDirection()).toBe(WEST);
    expect(new Direction(SOUTH).turn(TURN_LEFT).getDirection()).toBe(EAST);
  });

  it("should rotate from West", () => {
    expect(new Direction(WEST).turn(TURN_RIGHT).getDirection()).toBe(NORTH);
    expect(new Direction(WEST).turn(TURN_LEFT).getDirection()).toBe(SOUTH);
  });

  it("should rotate from EAST", () => {
    expect(new Direction(EAST).turn(TURN_RIGHT).getDirection()).toBe(SOUTH);
    expect(new Direction(EAST).turn(TURN_LEFT).getDirection()).toBe(NORTH);
  });
});
