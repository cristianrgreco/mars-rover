module.exports = class GridParser {
  parse(input) {
    const [x, y] = input.split(" ");
    return { x: +x, y: +y };
  }
};
