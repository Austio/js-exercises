matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.error('Printing Matrix 1 by 1')
for (var i = 0; i < matrix.length; i += 1) { ActivationRecord
  var row = matrix[i];
  console.log('i is outter loop', i);

  for (var i = 0; i < row.length; i += 1) { ActivationRecord
    console.log(i);
    console.log('i is inner loop', i);
  }
}
