import calculator from "./calculator";

describe("add", () => {
  test("adds 2 and 2", () => {
    expect(calculator.add(2, 2)).toEqual(4);
  });
});

describe("subtract", () => {
  test("4 minus 2", () => {
    expect(calculator.subtract(4, 2)).toEqual(2);
  });

  test("0 minus 10", () => {
    expect(calculator.subtract(0, 10)).toEqual(-10);
  });
});

describe("divide", () => {
  test("2 divided by 10", () => {
    expect(calculator.divide(2, 10)).toEqual(0.2);
  });

  test("20 divided by 5", () => {
    expect(calculator.divide(20, 5)).toEqual(4);
  });
});

describe("multiply", () => {
  test("2 multiply to 2", () => {
    expect(calculator.multiply(2, 2)).toEqual(4);
  });
});
