import shapePayload from "./shape-payload";

describe("/src/helpers/shape-payload", () => {
  const expectedPayload = {
    from: { id: "myUserId" },
    type: "message",
    text: "a message for you, Rudy",
  };

  it("should export a function", () => {
    expect(typeof shapePayload).toBe("function");
  });

  it("should return an object", () => {
    const output = shapePayload("message", "myUserId");

    expect(typeof output).toBe("object");
  });

  it("should return the expected payload", () => {
    const output = shapePayload("a message for you, Rudy", "myUserId");

    expect(output).toStrictEqual(expectedPayload);
  });
});
