
async function fetchAll() {
  let userPromise = fetch("https://jsonplaceholder.typicode.com/users/1");
  let postsPromise = fetch("https://jsonplaceholder.typicode.com/posts/1");

  // Wait for both promises to resolve in parallel
  let [user, post] = await Promise.all([userPromise, postsPromise]);

  let userData = await user.json();
  let postData = await post.json();

  console.log(userData, postData);
}

fetchAll();

