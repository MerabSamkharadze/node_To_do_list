const fs = require("fs");
const filePath = "./tasks";

let tasks = [];
if (fs.existsSync(filePath)) {
  tasks = JSON.parse(fs.readFileSync(filePath, "utf-8"));
} else {
  fs.writeFileSync(filePath, JSON.stringify(tasks));
}

// Helper functions
function saveTasks() {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

function displayTasks() {
  console.log("\nTo-Do List:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  console.log();
}

// Main menu
function showMenu() {
  console.log("1. View tasks");
  console.log("2. Add task");
  console.log("3. Delete task");
  console.log("4. Update task");
  console.log("5. Exit");
}

module.exports = { saveTasks, displayTasks, showMenu, tasks };
