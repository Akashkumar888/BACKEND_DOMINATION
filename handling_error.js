
async function fetchData() {
  try {
    let response = await fetch("https://invalid-url.com"); // Invalid URL
    let data = await response.json(); // This will not execute if fetch fails
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error); // Error handling
  }
}

fetchData();


