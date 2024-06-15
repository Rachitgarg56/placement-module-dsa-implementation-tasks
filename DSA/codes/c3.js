// 3. What will be the output of the given JavaScript code?
//  How can you modify the code to achieve the desired output using the `let` keyword?

// function example() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000)
//     }
// }
// example();

// 3. What will be the output of the given JavaScript code?
//  How can you modify the code to achieve the desired output using the `let` keyword?

function example() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i*1000)
    }
}
example();

