// How will you know if a number given falls under fibonacci series or not?

const isFibonacci = (num) => {
    let a = 0;
    let b = 1;
    let c = a + b;
    
    if (num === a || num === b) return true;

    while (num > c) {
        c = a + b;
        a = b;
        b = c;
        if (num === c) return true;
    }
    return false;
}

const num = 34;
const res = isFibonacci(num);
console.log(res);
