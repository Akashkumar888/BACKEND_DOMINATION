const mongoose = require('mongoose');

// Validate the URI is defined
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in .env");
  process.exit(1);
}

mongoose.connect(`${process.env.MONGODB_URI}/testdbtest`);



// Get the default connection
const db = mongoose.connection;



// Handle error
db.on('error', (err) => {
  console.error("❌ Database connection error:", err.message);
});


// Handle successful connection
db.once('open', () => {
  console.log("✅ Database connected successfully!");
});

module.exports = db;
