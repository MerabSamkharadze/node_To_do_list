const prompt = require("prompt-sync")({ sigint: true });

const { saveTasks, displayTasks, showMenu, tasks } = require("./fncs");

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = prompt("Choose an option: ");

    switch (choice) {
      case "1":
        displayTasks();
        break;
      case "2":
        const newTask = prompt("Enter the new task: ");
        tasks.push(newTask);
        saveTasks();
        console.log("Task added successfully!");
        break;
      case "3":
        displayTasks();
        const deleteIndex =
          parseInt(prompt("Enter the task number to delete: ")) - 1;
        if (deleteIndex >= 0 && deleteIndex < tasks.length) {
          tasks.splice(deleteIndex, 1);
          saveTasks();
          console.log("Task deleted successfully!");
        } else {
          console.log("Invalid task number!");
        }
        break;
      case "4":
        displayTasks();
        const updateIndex =
          parseInt(prompt("Enter the task number to update: ")) - 1;
        if (updateIndex >= 0 && updateIndex < tasks.length) {
          const updatedTask = prompt("Enter the updated task: ");
          tasks[updateIndex] = updatedTask;
          saveTasks();
          console.log("Task updated successfully!");
        } else {
          console.log("Invalid task number!");
        }
        break;
      case "5":
        running = false;
        console.log("Goodbye!");
        break;
      default:
        console.log("Invalid choice! Please choose a valid option.");
    }
  }
}

main();
