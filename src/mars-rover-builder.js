const MarsRover = require("./mars-rover");

module.exports = class MarsRoverBuilder {
  setGrid(grid) {
    this._grid = this._parseGrid(grid);
    return this;
  }

  setPosition(position) {
    const { direction, location } = this._parsePosition(position);
    this._direction = direction;
    this._location = location;
    return this;
  }

  build() {
    return new MarsRover(this._grid, this._direction, this._location);
  }

  _parseGrid(grid) {
    const [x, y] = grid.split(" ");
    return { x: +x, y: +y };
  }

  _parsePosition(position) {
    const [x, y, direction] = position.split(" ");
    return { direction, location: { x: +x, y: +y } };
  }
};
