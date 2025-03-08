// An async function always returns a promise
async function fetchData() {
  return "Data fetched!";
}

// Calling the async function
fetchData().then(console.log); // Output: Data fetched!








// Function that returns a Promise
function delay(ms) {
  return new Promise(function(resolve, reject) { // Corrected function syntax
    setTimeout(resolve, ms); // Removed extra closing parenthesis
  });
}

// Using await inside an async function
async function process() {
  console.log("Start");
  await delay(2000); // Waits for 2 seconds
  console.log("After 2 seconds");
}

process();

