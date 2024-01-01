import caesarCipher from "./caesarCipher";

test("works with single letter", () => {
  expect(caesarCipher("A", 3)).toBe("D");
});

test("works with phrases", () => {
  expect(caesarCipher("Happy New Year", 7)).toBe("Ohwwf Uld Flhy");
});

test("works with negative shift", () => {
  expect(caesarCipher("Ymnx nx f yjxy", -5)).toBe("This is a test");
});

test("wraps", () => {
  expect(caesarCipher("Z", 1)).toBe("A");
});

test("works with large shift factors", () => {
  expect(caesarCipher("My name is Chow Chow! Nice to meet you.", 80)).toBe(
    "Oa pcog ku Ejqy Ejqy! Pkeg vq oggv aqw."
  );
});

test("works with large negative shift factors", () => {
  expect(caesarCipher("Hello, World!", -54)).toBe("Fcjjm, Umpjb!");
});

test("keeping the same case", () => {
  expect(caesarCipher("Hello, World!", -52)).toBe("Hello, World!");
});
