const { NORTH, SOUTH, EAST, WEST, LEFT, RIGHT } = require("./constants");

const STATE_MACHINE = {
  [NORTH]: {
    [LEFT]: WEST,
    [RIGHT]: EAST
  },
  [SOUTH]: {
    [LEFT]: EAST,
    [RIGHT]: WEST
  },
  [EAST]: {
    [LEFT]: NORTH,
    [RIGHT]: SOUTH
  },
  [WEST]: {
    [LEFT]: SOUTH,
    [RIGHT]: NORTH
  }
};

module.exports = (currentDirection, rotation) =>
  STATE_MACHINE[currentDirection][rotation];
