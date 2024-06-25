// const numbers = [1, 2, 3, 4, 5, 6]

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })

// for (let el of numbers) {
//     console.log(el);
// }

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: "Stand By Me",
//         score: 85
//     },
//     {
//         title: "Parasite",
//         score: 95
//     }
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// });

// const alphabets = ["a", "b", "c", "d"];
// const caps = alphabets.map(function (al) {
//     return al.toLocaleUpperCase();
// });
// console.log(caps);

// Arrow function

// const titles = movies.map((movie) => {
//     return `${movie.title} : ${movie.score}`;
// })

// titles.forEach((title) => {
//     console.log(title);
// })

// () to return

// const titles = movies.map((movie) => (`${movie.title} : ${movie.score}`));

// console.log(titles)

// titles.forEach((title) => (console.log(title)))

// setTimeout and setInterval

// console.log("Hello!!!");

// setTimeout(() => console.log("...are you still there?"), 3000);

// console.log("GOODBYE!")

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// create a timemout

// let min = 1;
// let sec = 60;

// const timerId = setInterval(() => { console.log(`${min} : ${sec}`) }, 1000)

// const decrementId = setInterval(() => {

//     if (min !== 0 && sec !== 0) {
//         sec -= 1;
//         if (sec === 0) {
//             min -= 1;
//             sec += 60;
//         }
//     } else {
//         clearInterval(timerId);
//     }
// }, 1002)

//  Filter

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const even = nums.filter(n => n % 2 === 0);

// console.log(even)

// Some/Every

// const scores = [99, 75, 875, 40, 65, 86];

// const passed = scores.every(score => score > 50);

// const someFailed = scores.some(score => score < 50);

// Reduce

// const arr = [1, 2, 3, 4, 4]

// const arrSum = arr.reduce((temp, currVal) => {
//     return temp + currVal;
// })

// console.log(arrSum)

// const sales = [9.99, 7.70, 6.55, 7.44, 8.74];

// const salesTotal = sales.reduce((currTotal, currSale) => (currTotal + currSale))

// console.log(salesTotal);

// const arr = [1, 4, 5, 3, 4, 6, 7, 2]

// const max = arr.reduce((currMax, currVal) => {
//     if (currVal > currMax) {
//         return currVal;
//     }
//     return currMax;
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: "Stand By Me",
//         score: 85
//     },
//     {
//         title: "Parasite",
//         score: 95
//     }
// ]

// const bestMovie = movies.reduce((currBest, currScore) => {
//     if (currScore.score > currBest.score) {
//         return currScore;
//     }

//     return currBest;
// })

// Arrow function and 'this' keyword

const person = {
    firstName: "Piyush",
    LastName: "Sharma",
    fullName: function () {
        return `${this.firstName} ${this.LastName}`
    },
    shoutOut: function () {
        console.log(this.fullName());
    }
}

