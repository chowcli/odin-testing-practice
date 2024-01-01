function analyzeArray(arrNum) {
  const average =
    arrNum.reduce((accumulator, current) => accumulator + current, 0) /
    arrNum.length;

  const min = Math.min(...arrNum);
  const max = Math.max(...arrNum);

  return { average, min, max, length: arrNum.length };
}

export default analyzeArray;
