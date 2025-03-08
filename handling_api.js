
async function fetchUser() {
  try {
    // Fetch data from an API
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json(); // Wait for JSON conversion
    console.log(user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

fetchUser();

