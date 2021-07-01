function diagonalDifference(matrix) {
  let diagonal1 = 0,
    diagonal2 = 0;
  const length = matrix.length;
  for (let i = 0; i < length; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[length - 1 - i][i];
  }
  return Math.abs(diagonal1 - diagonal2);
}
var matrixSamples = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 1],
];
console.log(diagonalDifference(matrixSamples));
