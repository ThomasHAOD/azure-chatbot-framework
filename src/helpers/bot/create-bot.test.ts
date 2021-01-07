import initialiseDirectLine from "./create-bot";

describe("/src/helpers/initialiseDirectLine", () => {
  it("should export a function", () => {
    const directLine = initialiseDirectLine;

    expect(typeof directLine).toStrictEqual("function");
  });

  it("should return an object", () => {
    const directLineReturn = initialiseDirectLine();

    expect(typeof directLineReturn).toStrictEqual("object");
  });
});
