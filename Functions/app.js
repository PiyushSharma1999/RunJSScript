// function repeat(message, num) {
//     for (let i = 0; i < num; i++) {
//         console.log(message);
//     }
// }

// repeat("Hi", 4)

// function add(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return false;
//     }

//     return a + b;
// }

// let sum = add(9, "a");
// console.log(sum)


// function capitalize(word) {
//     let wordarr = word.split("");

//     let res = "";

//     for (i = 1; i < wordarr.length; i++) {
//         res += wordarr[i];
//     }

//     return word[0].toUpperCase() + res;
// }

// let capitalized = capitalize("abcd");
// console.log(capitalized);

// let wordSplit = "abcd".split("");
// let res = ""
// for (let i = 1; i < wordSplit.lenght; i++) {
//     res += wordSplit[i];
// }


// console.log("A" + res);

// Scopes

//Block

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
// console.log(i)

// Lexical

// function addOneSqrt() {
//     const nums = [1, 2, 3, 4, 5];

//     function sqrt() {
//         function add(num) {
//             return num + 1;
//         }
//         for (let i = 0; i <= nums.length - 1; i++) {
//             let num = add(nums[i]);
//             console.log(`Squareroot of ${num} is ${num * num}`);
//         }
//     }
//     sqrt();
// }

// addOneSqrt();

// function expression

// const sqrt = function (x) {
//     return x * x;
// }

// console.log(sqrt(10));

// function add() {
//     console.log(1);
// }

// function add() {
//     console.log(2);
// }

// add();

// Higher order function

// function callTwic(func) {
//     func();
//     func();
// }

// function func() {
//     console.log("HOY");
// }

// callTwic(func);

// Returnig a function

// function returnFunc() {


//     return function add() {
//         return 1 + 2;
//     };
// }

// let addfunc = returnFunc();

// console.log(addfunc());

// function makeBetween(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// let isChild = makeBetween(0, 10);
// console.log(isChild(2));
// console.log(isChild(12));

//  Methods

// const myMath = {
//     PI: 3.14,

//     multiply: function (num1, num2) { return num1 * num2; },

//     add: function (num1, num2) { return num1 + num2; },

//     subtract: function (num1, num2) { return num1 - num2; },

//     divide: function (num1, num2) { return num1 / num2; }
// }

// This keyword

// const myself = {
//     name: "Piyush",
//     age: 25,
//     intro() {
//         console.log(`Hi! My name is ${this.name} and I'm ${this.age}!`)
//     }
// }