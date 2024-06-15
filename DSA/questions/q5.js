// Q5.

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];


const vegetables = inventory.filter((obj) => {
    return obj.type === 'vegetables';
})

const fruit = inventory.filter((obj) => {
    return obj.type === 'fruit';
})

const meat = inventory.filter((obj) => {
    return obj.type === 'meat';
})
  
const res = {
    vegetables,
    fruit,
    meat,
}

console.log(res);

//   Output - 
//   {
//   vegetables: [
//   { name: 'asparagus', type: 'vegetables', quantity: 5 },
//    ],
//   fruit: [
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "cherries", type: "fruit", quantity: 5 }
//   ],
//   meat: [
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "fish", type: "meat", quantity: 22 }
//   ] }
  