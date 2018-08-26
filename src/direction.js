const { NORTH, SOUTH, EAST, WEST, TURN_LEFT, TURN_RIGHT } = require("./constants");

const STATE_MACHINE = {
  [NORTH]: {
    [TURN_LEFT]: WEST,
    [TURN_RIGHT]: EAST
  },
  [SOUTH]: {
    [TURN_LEFT]: EAST,
    [TURN_RIGHT]: WEST
  },
  [EAST]: {
    [TURN_LEFT]: NORTH,
    [TURN_RIGHT]: SOUTH
  },
  [WEST]: {
    [TURN_LEFT]: SOUTH,
    [TURN_RIGHT]: NORTH
  }
};

module.exports = class Direction {
  constructor(direction) {
    this._direction = direction;
  }

  turn(rotation) {
    const newDirection = STATE_MACHINE[this._direction][rotation];
    return new Direction(newDirection);
  }

  getDirection() {
    return this._direction;
  }
};
