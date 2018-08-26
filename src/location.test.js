const { NORTH, SOUTH, EAST, WEST } = require("./constants");
const Location = require("./location");

describe("Location", () => {
  it("should move up", () => {
    const grid = { x: 1, y: 1 };
    const currentLocation = { x: 0, y: 0 };

    const result = new Location(grid, currentLocation).next(NORTH).getLocation();

    expect(result).toEqual({ x: 0, y: 1 });
  });

  it("should move up within bounds", () => {
    const grid = { x: 1, y: 1 };
    const currentLocation = { x: 0, y: 1 };

    const result = new Location(grid, currentLocation).next(NORTH).getLocation();

    expect(result).toEqual({ x: 0, y: 1 });
  });

  it("should move down", () => {
    const grid = { x: 1, y: 1 };
    const currentLocation = { x: 0, y: 1 };

    const result = new Location(grid, currentLocation).next(SOUTH).getLocation();

    expect(result).toEqual({ x: 0, y: 0 });
  });

  it("should move down within bounds", () => {
    const grid = { x: 1, y: 1 };
    const currentLocation = { x: 0, y: 0 };

    const result = new Location(grid, currentLocation).next(SOUTH).getLocation();

    expect(result).toEqual({ x: 0, y: 0 });
  });

  it("should move left", () => {
    const grid = { x: 1, y: 1 };
    const currentLocation = { x: 1, y: 0 };

    const result = new Location(grid, currentLocation).next(WEST).getLocation();

    expect(result).toEqual({ x: 0, y: 0 });
  });

  it("should move left within bounds", () => {
    const grid = { x: 1, y: 1 };
    const currentLocation = { x: 0, y: 0 };

    const result = new Location(grid, currentLocation).next(WEST).getLocation();

    expect(result).toEqual({ x: 0, y: 0 });
  });

  it("should move right", () => {
    const grid = { x: 1, y: 1 };
    const currentLocation = { x: 0, y: 0 };

    const result = new Location(grid, currentLocation).next(EAST).getLocation();

    expect(result).toEqual({ x: 1, y: 0 });
  });

  it("should move right within bounds", () => {
    const grid = { x: 1, y: 1 };
    const currentLocation = { x: 1, y: 0 };

    const result = new Location(grid, currentLocation).next(EAST).getLocation();

    expect(result).toEqual({ x: 1, y: 0 });
  });
});
