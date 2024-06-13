// for (i = 10; i >= 1; i--) {
//     console.log(i);
// };

// for (i = 1; i <= 10; i++) {
//     console.log(i);
// };

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

// for (i = 0; i <= 11; i++) {
//     console.log(arr[i].toUpperCase());
// }

// for (let i = 1; i <= 6; i++) {
//     console.log("Da ba dee da ba daa", i);
// };

// for (i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// const animals = ['cat', 'dog', 'tiger']

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i])
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 0; i < people.length; i++) {
//     console.log(i + 1, " | ", people[i].toUpperCase());
// }

// for (i = 0; i <= 10; i++) {
//     console.log(`i is ${i}`)
//     for (j = 0; j <= 4; j++) {
//         console.log(`j is ${j}`)
//     }
// }

// const alphabets = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// for (i = 0; i < alphabets.length; i++) {
//     for (j = 0; j <= alphabets.length - 1; j++) {
//         console.log(alphabets[i][j])
//     }
// }

// While Loops

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// const SECRET = "SecretCode";

// let guess = prompt("enter the secrete code: ");

// while (guess !== SECRET) {
//     console.log("INCORRET!");
//     guess = prompt("enter the secret code: ");
// }

// Break Keyword

// let input = prompt("hey! say something");

// while (true) {
//     input = prompt(input);
//     if (input.toLocaleLowerCase === "Stop Copying Me") {
//         console.log("We'll Be Right Back!!");
//         break;
//     }
// }

// Guessing Game

// const correct_number = 4;

// let input = prompt("Guess the number:");

// let count = 0

// while (true) {
//     count++;
//     if (input < correct_number) {
//         input = prompt('Guess Higher');
//     }
//     else if (input > correct_number) {
//         input = prompt('Guess Lower');
//     }
//     else {
//         console.log(`It took you ${count} guesses.`);
//         break;
//     }
// }

let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess: "));

let attempt = 0;

while (parseInt(guess) !== targetNum) {

    if (guess === 'q') {
        break;
    }

    attempt += 1;

    if (guess > targetNum) {
        guess = prompt("Too High! Guess again:");
    }

    else {
        guess = prompt("Too Low! Guess again:");
    }
}
if (guess === 'q') {

    console.log("SEE YOU LATER!");

}
else {
    console.log(`HOORAY! YOU GOT IT! IT TOOK YOU ${attempt} guesses.`)
}