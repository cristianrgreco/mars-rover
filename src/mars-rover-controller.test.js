const GridParser = require("./grid-parser");
const CommandsParser = require("./commands-parser");
const MarsRoverController = require("./mars-rover-controller");

describe("MarsRoverController", () => {
  it("should send and receive commands from the mars rovers", () => {
    const input = `
      5 5
      1 2 N
      LMLMLMLMM
      3 3 E
      MMRMMRMRRM
    `;

    const result = new MarsRoverController(new GridParser(), new CommandsParser()).execute(input);

    expect(result).toBe("1 3 N\n5 1 E");
  });
});
