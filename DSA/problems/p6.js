const arr = [1,2,3,4,5];
const ans = arr.reduce((acc,curr) => {
    return acc + curr;
}, 0);
console.log(ans);