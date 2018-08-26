const Location = require("./location");
const Direction = require("./direction");

module.exports = class CommandsParser {
  parse(grid, [location, commands]) {
    const [x, y, direction] = location.split(" ");

    return {
      location: new Location(grid, { x: +x, y: +y }),
      direction: new Direction(direction),
      commands: commands.split("")
    };
  }
};
