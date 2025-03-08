
async function processTasks(tasks) {
  for (let task of tasks) {
    let result = await task(); // Wait for each task to complete
    console.log(result);
  }
}

// Array of async functions
let tasks = [
  () => new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 2000))
];

processTasks(tasks);
