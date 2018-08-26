const chunk = require("./chunk");
const MarsRover = require("./mars-rover");

const COMMANDS_PER_ROVER = 2;

module.exports = class MarsRoverController {
  constructor(gridParser, commandsParser) {
    this._gridParser = gridParser;
    this._commandsParser = commandsParser;
  }

  execute(input) {
    const [rawGrid, ...rawCommands] = input
      .trim()
      .split("\n")
      .map(line => line.trim());

    const grid = this._gridParser.parse(rawGrid);
    const rawCommandsChunks = chunk(rawCommands, COMMANDS_PER_ROVER);

    const marsRoverLocations = rawCommandsChunks.map(rawCommandChunk => {
      const { location, direction, commands } = this._commandsParser.parse(grid, rawCommandChunk);

      const marsRover = commands.reduce(
        (marsRover, command) => marsRover.execute(command),
        new MarsRover(location, direction)
      );

      return marsRover.getLocation();
    });

    return marsRoverLocations.join("\n");
  }
};
