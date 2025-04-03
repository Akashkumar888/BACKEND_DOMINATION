
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware to parse JSON, URL-encoded data, and cookies
app.use(express.json());  // For parsing JSON body
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(cookieParser());  // For parsing cookies

// Universal Middleware to Log All Request Details
app.use((req, res, next) => {
    console.log("📌 Request Details:");
    console.log("➡️ req.params:", req.params); // Route parameters
    console.log("📩 req.body:", req.body); // Request body (for POST/PUT)
    console.log("🍪 req.cookies:", req.cookies); // Cookies (needs cookie-parser)
    console.log("🔎 req.query:", req.query); // Query parameters
    console.log("📍 req.ip:", req.ip); // Client IP address
    console.log("📜 req.headers:", req.headers); // Request headers
    console.log("🔗 req.url:", req.url); // Requested URL
    console.log("📬 req.method:", req.method); // HTTP method
    console.log("-------------------------------------");
    next(); // Continue to the next middleware or route
});

// Dynamic Route Handler
app.all('/:routeName', (req, res) => {
    res.json({
        message: `This is the dynamic route: ${req.params.routeName}`,
        params: req.params,
        body: req.body,
        cookies: req.cookies,
        query: req.query,
        ip: req.ip,
        headers: req.headers,
        url: req.url,
        method: req.method
    });
});

// Start Server
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
