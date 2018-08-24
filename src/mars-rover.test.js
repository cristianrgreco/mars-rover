const MarsRoverBuilder = require("./mars-rover-builder");

describe("MarsRover", () => {
  it("should move in the specified direction", () => {
    const rover = new MarsRoverBuilder()
      .setGrid("5 5")
      .setPosition("0 0 N")
      .build();

    expect(rover.sendCommands("RM").getLocation()).toBe("1 0 E");
  });
});
