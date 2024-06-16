const todoList = {};



let serialNumber = 0;

while (true) {

    let input = prompt("Please select an operation from the given list.");

    if (input.toLowerCase() === "new") {
        let todoTask = prompt("Please enter your task.");
        todoList[serialNumber] = todoTask;
        serialNumber += 1;
    }
    else if (input.toLowerCase() === "list") {
        console.log("*************************");
        for (let number in todoList) {
            console.log(`${number} : ${todoList[number]}`);
        }
        console.log("*************************");
    }
    else if (input.toLowerCase === "delete") {
        let index = parseInt(prompt("Please enter the index of the task to delete."));

        while (!index) {
            index = parseInt(prompt("Please enter a valid number."));

            while (index > Object.length(todoList)) {
                index = parseInt(prompt("The given index does not exist. Please entre a valid index."))
            }
        }
        delete todoList[index];
        console.log("ToDo Removed");
        serialNumber -= 1;
    }

    else if (input.toLowerCase === "quit") {
        console.log("Thank you for using the ToDo List app.");
        break;
    }
    else {
        console.log("Please enter a valid option. (Options: new, list, delete, quit)");
    }
}