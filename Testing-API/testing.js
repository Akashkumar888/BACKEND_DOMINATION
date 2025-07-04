const bcrypt = require('bcrypt');

// 🔐 Hashes the password and returns the hashed value
async function hashedPassword(password) {
  const salt = await bcrypt.genSalt(10);            // generate a salt
  const hashedPassword = await bcrypt.hash(password, salt);   // hash the password using the salt
  return hashedPassword;
};


module.exports=hashedPassword;


