matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.error('Printing Matrix 1 by 1')
// Print values
for (var i = 0; i < matrix.length; i += 1) {
  var row = matrix[i];
  for (var i = 0; i < row.length; i += 1) {
    console.info(row[i]);
  }
}
