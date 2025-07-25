const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  mobile: {
  type: String,
  required: true,
  unique: true,
  trim: true,
  match: /^9\d{9}$/, // adjust based on your app logic
},
  otpHash: { type: String },
  otpExpires: { type: Date }
}, { timestamps: true });

userSchema.methods.setOTP = async function(plainOtp) {
  const salt = await bcrypt.genSalt(10);
  this.otpHash = await bcrypt.hash(plainOtp, salt);
  this.otpExpires = Date.now() + 5*60*1000; // 5 min expiry
};

userSchema.methods.verifyOTP = async function(plainOtp) {
  if (!this.otpHash || this.otpExpires < Date.now()) return false;
  return bcrypt.compare(plainOtp, this.otpHash);
};

module.exports = mongoose.model('User', userSchema);

