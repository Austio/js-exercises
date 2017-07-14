matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Wrap in IIFE to keep var in scope
for (var i = 0; i < matrix.length; i += 1) {
  var row = matrix[i];
  ( function foo() {
    for (var i = 0; i < row.length; i += 1) {
      console.info(row[i]);
    }
  })()
}
