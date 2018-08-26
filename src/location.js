const { NORTH, SOUTH, EAST, WEST } = require("./constants");

module.exports = class Location {
  constructor(grid, currentLocation) {
    this._grid = grid;
    this._x = currentLocation.x;
    this._y = currentLocation.y;
  }

  next(direction) {
    if (direction === NORTH) {
      return new Location(this._grid, {
        x: this._x,
        y: Math.min(this._grid.y, this._y + 1)
      });
    } else if (direction === SOUTH) {
      return new Location(this._grid, {
        x: this._x,
        y: Math.max(0, this._y - 1)
      });
    } else if (direction === WEST) {
      return new Location(this._grid, {
        x: Math.max(0, this._x - 1),
        y: this._y
      });
    } else if (direction === EAST) {
      return new Location(this._grid, {
        x: Math.min(this._grid.x, this._x + 1),
        y: this._y
      });
    }
  }

  getLocation() {
    return {
      x: this._x,
      y: this._y
    };
  }
};
