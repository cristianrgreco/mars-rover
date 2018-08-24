const { NORTH, SOUTH, EAST, WEST } = require("./constants");

module.exports = (direction, grid, location) => {
  const STATE_MACHINE = {
    [NORTH]: {
      x: location.x,
      y: Math.min(grid.y, location.y + 1)
    },
    [SOUTH]: {
      x: location.x,
      y: Math.max(0, location.y - 1)
    },
    [EAST]: {
      x: Math.min(grid.x, location.x + 1),
      y: location.y
    },
    [WEST]: {
      x: Math.max(0, location.x - 1),
      y: location.y
    }
  };

  return STATE_MACHINE[direction];
};
