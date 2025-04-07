


const express=require('express');
const app=express();

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

app.get('/',function(req,res){
  res.render("indexpost");
})

app.post('/check',function(req,res){
  console.log(req.body);
  res.send("Working...");
})

app.listen(3000);




// ✅ 1. const express = require('express');
// This imports the Express module.

// express is a web framework for Node.js that helps you build web applications and APIs easily.

// ✅ 2. const app = express();
// Here, you're creating an instance of an Express application.

// This app will be used to define routes and configure middleware.

// ✅ 3. app.set('view engine', 'ejs');
// This line tells Express:
// ➤ “Use EJS (Embedded JavaScript) as the template engine.”

// So now, if you use res.render("filename"), Express will look for an EJS file inside the views/ folder (default location).

// ✅ 4. app.use(express.json());
// This enables your app to automatically parse incoming JSON data from the request body.

// Mainly used for API requests with Content-Type: application/json.

// ✅ 5. app.use(express.urlencoded({ extended: true }));
// This parses URL-encoded data (e.g., from HTML forms like <form method="POST">).

// extended: true means it can handle nested objects (e.g., person[address][street]).

// This defines a GET route at / (the homepage).

// When someone visits localhost:3000/, it will: ➤ Render an EJS template named indexpost.ejs from the views/ folder.

// This defines a POST route at /check.

// It will:

// Log the incoming form or JSON data to the console (console.log(req.body)).

// Send back a simple response: "Working...".

// ✅ 8. app.listen(3000);
// Starts the server and listens on port 3000.

// Now you can visit your app in the browser at:
// ➤ http://localhost:3000/

