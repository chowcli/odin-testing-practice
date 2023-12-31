import reverseString from "./reverseString";

describe("take a string and reverse it", () => {
  test("work with single string word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("work with multiple strings word", () => {
    expect(reverseString("Hi, my name is Chow")).toBe("wohC si eman ym ,iH");
  });

  test("work with numbers and special characters", () => {
    expect(reverseString("123!@#$ %$890")).toBe("098$% $#@!321");
  });

  test("work with blank string", () => {
    expect(reverseString("")).toBe("");
  });
});
