// Q8.
// Code to give sum of diagonal
// [[10,1,20,40,20],
//  [10,1,21,40,20],
//  [10,1,40,40,20],
//  [10,1,30,40,20],
//  [10,1,60,40,20]]

const matrix = [[10,1,20,40,20],
                [10,1,21,40,20],
                [10,1,40,40,20],
                [10,1,30,40,20],
                [10,1,60,40,20]];

const rows = matrix.length;
const cols = matrix[0].length;

let tr = 0;
let tc = 0;

let sum = 0;

while (tr < rows && tc < cols) {
    sum += matrix[tr++][tc++];
}

console.log(sum);
