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

function chunk(array, chunkSize) {
  const chunks = [];

  let chunkIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (i % chunkSize === 0) {
      chunkIndex++;
      chunks[chunkIndex] = [value];
    } else {
      chunks[chunkIndex].push(value);
    }
  }

  return chunks;
}

startRovers(testInput);
