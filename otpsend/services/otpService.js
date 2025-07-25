
module.exports.generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

// In production, integrate with Twilio/Fast2SMS
module.exports.sendOTP = async (mobile, otp) => {
  console.log(`📤 Sending OTP ${otp} to ${mobile}`);
};

