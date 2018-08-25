const nextDirection = require("./direction");
const nextLocation = require("./location");
const { RIGHT, LEFT, MOVE } = require("./constants");

module.exports = class MarsRover {
  constructor(grid, direction, location) {
    this._grid = grid;
    this._direction = direction;
    this._location = location;
  }

  sendCommands(commands) {
    return commands.split("").reduce((nextRover, command) => {
      switch (command) {
        case RIGHT:
          return nextRover._turn(RIGHT);
        case LEFT:
          return nextRover._turn(LEFT);
        case MOVE:
          return nextRover._move();
      }
    }, this);
  }

  getLocation() {
    return `${this._location.x} ${this._location.y} ${this._direction}`;
  }

  _turn(rotation) {
    const newDirection = nextDirection(this._direction, rotation);
    return new MarsRover(this._grid, newDirection, this._location);
  }

  _move() {
    const newLocation = nextLocation(
      this._direction,
      this._grid,
      this._location
    );
    return new MarsRover(this._grid, this._direction, newLocation);
  }
};
