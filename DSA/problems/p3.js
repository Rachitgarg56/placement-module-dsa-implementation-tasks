// Swap KEY : Value
let obj = {
     a : 1,
     b : 2
}

const temp = obj.a;
obj.a = obj.b;
obj.b = temp;

console.log(obj);
