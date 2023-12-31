import capitalize from "./capitalize";

describe("capitalize first character", () => {
  test("'hello' should become 'Hello'", () => {
    expect(capitalize("hello")).toEqual("Hello");
  });

  test("'Hello' should still be 'Hello'", () => {
    expect(capitalize("Hello")).toEqual("Hello");
  });
});
