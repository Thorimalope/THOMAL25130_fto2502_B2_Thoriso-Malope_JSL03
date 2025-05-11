// First Task //

let firstTask = prompt("Enter task 1 title:");
console.log(firstTask)

let taskDescription = prompt("Enter task description:");
console.log(taskDescription)

let status = prompt("Enter status of completion").toLowerCase();
console.log(status)

while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter status of completion:").toLowerCase();
  }

if (status === "todo" || status === "doing") {
    console.log("No task completed, lets get to work!");
} else if (status === "done") {
    console.log(" Title: " + firstTask + " status: done. ");
} else {
    console.log("Invalid status, please enter 'todo', 'doing' or 'done'" )
}

// Second Task //

let secondTask = prompt("Enter task 2 title:");
console.log(secondTask)

let taskDescription2 = prompt("Enter task description:");
console.log(taskDescription2)

let status2 = prompt("Enter status of completion");
console.log(status2)

while (status2 !== "todo" && status2 !== "doing" && status2 !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status2 = prompt("Enter status of completion:").toLowerCase();
  }

if (status2 === "todo" || status2 === "doing") {
    console.log("No task completed, lets get to work!");
} else if (status2 === "done") {
    console.log(" Title: " + secondTask + " status: done. ");
} else {
    console.log("Invalid status, please enter 'todo', 'doing' or 'done'" )
}


  
// initial array
const initialTasks = [
    {
      id: 1,
      title: "Launch Epic Career",
      description: "Create a killer Resume",
      status: "todo",
    },
    {
      id: 2,
      title: "Master JavaScript",
      description: "Get comfortable with the fundamentals",
      status: "doing",
    },
    {
      id: 3,
      title: "Contribute to Open Source Projects",
      description:
        "Gain practical experience and collaborate with others in the software development community",
      status: "done",
    },
  ];
  
  // New tasks array
  const newTasks = [];
  
  // first task
  const addTask1 = confirm("Do you want to add a new task?");
  if (addTask1) {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const status = prompt("Enter task status (todo, doing, done):");
    const id = initialTasks.length + newTasks.length + 1;
  
    const task = {
      id: id,
      title: title,
      description: description,
      status: status,
    };
  
    newTasks.push(task);
  }
  
  // second task
  const addTask2 = confirm("Do you want to add another task?");
  if (addTask2) {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const status = prompt("Enter task status (todo, doing, done):");
    const id = initialTasks.length + newTasks.length + 1;
  
    const task = {
      id: id,
      title: title,
      description: description,
      status: status,
    };
  
    newTasks.push(task);
  }
  
  // third task
  const addTask3 = confirm("Do you want to add another task?");
  if (addTask3) {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const status = prompt("Enter task status (todo, doing, done):");
    const id = initialTasks.length + newTasks.length + 1;
  
    const task = {
      id: id,
      title: title,
      description: description,
      status: status,
    };
  
    newTasks.push(task);
  }
  
  // Alert after the last task is added
if (addTask1 && addTask2 && addTask3) {
    alert("There are enough tasks on your board, please check them in the console.");
  }


  // Combine initial and new array
  const allTasks = initialTasks.concat(newTasks);
  
  // Show all tasks
  console.log("All tasks:", allTasks);
  
  // log only completed tasks
  const completedTasks = allTasks.filter(function (task) {
    return task.status === "done";
  });
  
  console.log("Completed tasks:", completedTasks);
  