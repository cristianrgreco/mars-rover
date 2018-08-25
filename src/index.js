const chunk = require("./chunk");
const MarsRoverBuilder = require("./mars-rover-builder");

const testInput = `
  5 5
  1 2 N
  LMLMLMLMM
  3 3 E
  MMRMMRMRRM
`;

function startRovers(input) {
  const [grid, ...allCommands] = input
    .trim()
    .split("\n")
    .map(line => line.trim());

  const commandChunks = chunk(allCommands, 2);

  commandChunks.forEach(([position, commands]) => {
    const rover = new MarsRoverBuilder()
      .setGrid(grid)
      .setPosition(position)
      .build();

    const roverLocation = rover.sendCommands(commands).getLocation();

    console.log(roverLocation);
  });
}

startRovers(testInput);
