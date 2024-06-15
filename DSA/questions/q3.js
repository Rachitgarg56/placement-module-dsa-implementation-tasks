// Question 3.
const arrNum = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];


const res = arrNum.map((arr) => {
    const product = arr.reduce((acc,ele) => {
        acc *= ele;
        return acc;
    }, 1);
    return product;
});

console.log(res);


// [ [ 6 ], [ 120 ], [ 504 ] ] (Replace with factorial array)
  