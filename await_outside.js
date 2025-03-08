
// This works only inside ES modules
let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
let user = await response.json();
console.log(user);

