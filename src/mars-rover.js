const { MOVE, TURN_LEFT, TURN_RIGHT } = require("./constants");

module.exports = class MarsRover {
  constructor(location, direction) {
    this._location = location;
    this._direction = direction;
  }

  execute(command) {
    if (command === MOVE) {
      return this._move();
    } else if (command === TURN_LEFT || command === TURN_RIGHT) {
      return this._turn(command);
    }
  }

  getLocation() {
    const { x, y } = this._location.getLocation();
    const direction = this._direction.getDirection();
    return `${x} ${y} ${direction}`;
  }

  _move() {
    const direction = this._direction.getDirection();
    return new MarsRover(this._location.next(direction), this._direction);
  }

  _turn(rotation) {
    return new MarsRover(this._location, this._direction.turn(rotation));
  }
};
