
async function getNumber() {
  return 42; // Returns a resolved Promise with value 42
}

// Handling the returned promise
getNumber().then(console.log); // Output: 42

