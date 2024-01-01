import analyzeArray from "./analyzeArray";

test("average of array", () => {
  expect(analyzeArray([1, 2, 5, 6, 8, 9, 10]).average).toBeCloseTo(5.857);
});

test("min of array", () => {
  expect(analyzeArray([1, 2, 5, 6, 8, 9, 10]).min).toBeCloseTo(1);
});

test("max of array", () => {
  expect(analyzeArray([1, 2, 5, 6, 8, 9, 10]).max).toBeCloseTo(10);
});

test("length of array", () => {
  expect(analyzeArray([1, 2, 5, 6, 8, 9, 10]).length).toBeCloseTo(7);
});
