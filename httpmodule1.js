
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Server Chalu Hai!");
});

// Listening on port 3000
server.listen(3000, () => {
  console.log("🚀 Server listening at http://localhost:3000");
});

// Server Events
server.on('request', (req, res) => {
  console.log(`📩 Request received: ${req.method} ${req.url}`);
});

server.on('connection', (socket) => {
  console.log("🔗 New Connection established");
});

server.on('listening', () => {
  console.log("✅ Server is listening...");
});

server.on('error', (err) => {
  console.error("❌ Server error:", err);
});

server.on('close', () => {
  console.log("🛑 Server stopped.");
});

// You can close server manually like this after 10 sec
setTimeout(() => {
  server.close();
}, 10000);

