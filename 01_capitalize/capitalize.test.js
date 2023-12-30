import capitalize from "./capitalize";

describe("capitalize first character", () => {
  test("'hello' should become 'Hello'", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("'Hello' should still be 'Hello'", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});
