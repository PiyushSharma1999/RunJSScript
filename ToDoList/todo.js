// const todoList = {};



// let serialNumber = 0;

// let input = prompt("Please enter an option.");

// while (input !== "quit" || input !== 'q') {

//     input = prompt("Please select an operation from the given list.");

//     if (input.toLowerCase() === "new") {
//         let todoTask = prompt("Please enter your task.");
//         todoList[serialNumber] = todoTask;
//         serialNumber += 1;
//     }
//     else if (input.toLowerCase() === "list") {


//         if (Object.values(todoList).length() === 0) {
//             console.log("There are no in tasks in. Please entre some task before selecting the 'delete' option.")
//         } else {
//             console.log("*************************");
//             for (let number in todoList) {
//                 console.log(`${number} : ${todoList[number]}`);
//             }
//             console.log("*************************");
//         }


//     }
//     else if (input.toLowerCase === "delete") {

//         if (Object.values(todoList).length() === 0) {
//             console.log("There are no in tasks in. Please entre some task before selecting the 'delete' option.")
//         } else {

//             let index = parseInt(prompt("Please enter the index of the task to delete."));

//             while (!index) {
//                 index = parseInt(prompt("Please enter a valid number."));

//                 while (index > Object.values(todoList).length()) {
//                     index = parseInt(prompt("The given index does not exist. Please entre a valid index."))
//                 }
//             }
//             delete todoList[index];
//             console.log("ToDo Removed");
//             serialNumber -= 1;
//         }

//     }

//     else {
//         console.log("Please enter a valid option. (Options: new, list, delete, quit)");
//     }
// }

// console.log("SEE YOU LATER!")

let input = prompt("Please select an option.")

const todoList = ['Collect Rocks']

while (input !== "quit" && input !== "q") {
    input = prompt("Please select an option.")
}

console.log("SEE YOU LATER!")