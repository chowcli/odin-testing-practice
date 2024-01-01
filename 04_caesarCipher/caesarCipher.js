function caesarCipher(string, key) {
  return string
    .split("")
    .map(char => shiftChar(char, key))
    .join("");
}

function shiftChar(char, key) {
  const charCode = char.charCodeAt();

  if (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122)
  ) {
    return String.fromCharCode(
      mod(charCode + key - codeSet(charCode), 26) + codeSet(charCode)
    );
  }

  return char;
}

function codeSet(charCode) {
  return charCode < 97 ? 65 : 97;
}

const mod = (n, m) => ((n % m) + m) % m;

export default caesarCipher;
