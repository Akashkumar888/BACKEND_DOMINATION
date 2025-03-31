

const express = require("express");
const path = require("path"); // For serving static files
const cors = require("cors"); // For handling CORS issues
const bodyParser = require("body-parser"); // For parsing request bodies
const helmet = require("helmet"); // For security enhancements
const morgan = require("morgan"); // For logging requests

// ek dabba bnta hai yaha express ka
const app = express();
// dabbe ki sari value khol lo

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(helmet()); // Security enhancements
app.use(morgan("dev")); // Log HTTP requests

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// app.get(Router,handler)
// handler hamesha ek function hota hai 
// get means fronted se kuch lao 
// get ek method hai 

// Basic Routes
app.get("/", function (req, res) {
  res.send("Hello Priya How are You ?");
});

app.get("/about", function (req, res) {
  res.send("Hello Akash kumar 74438");
});

// Dynamic route with URL parameters
app.get("/user/:name", function (req, res) {
  res.send(`Hello, ${req.params.name}!`);
});

// Handling Query Parameters
app.get("/search", function (req, res) {
  const query = req.query.q;
  res.send(`You searched for: ${query}`);
});

// POST request example
app.post("/submit", function (req, res) {
  const { name, email } = req.body;
  res.json({ message: "Form submitted successfully", name, email });
});

// Middleware example (Custom Logger)
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Wild card mtlb all , all mtlb sare routes , universal routes 
// * mtlb all 
// ham ise last me hi banate hai ok 
app.get("*", function (req, res) {
  res.send("If nothing works, I will try...");
});

// server.listen ki tarah yaha app.listen
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

