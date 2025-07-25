const User = require('../models/User');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const twilio = require('twilio');
const { TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE } = process.env;

const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

// Joi validation
const loginSchema = Joi.object({ mobile: Joi.string().pattern(/^9\d{9}$/).required() });
const verifySchema = Joi.object({ mobile: Joi.string().pattern(/^9\d{9}$/).required(), otp: Joi.string().length(6).required() });

exports.showLogin = (req, res) => res.render('login', { error: null });

exports.sendOTP = async (req, res) => {
  const { error, value } = loginSchema.validate(req.body);
  if (error) return res.render('login', { error: error.details[0].message });

  const { mobile } = value;
  const otp = ('' + Math.floor(100000 + Math.random() * 900000)); // 6‑digit
  let user = await User.findOne({ mobile });
  if (!user) user = new User({ mobile });

  await user.setOTP(otp);
  await user.save();

  try {
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: TWILIO_PHONE,
      to: `+91${mobile}`
    });
    res.render('verify', { mobile, error: null });
  } catch (e) {
    console.error(e);
    res.render('login', { error: 'Failed to send OTP. Try again.' });
  }
};

exports.verifyOTP = async (req, res) => {
  const { error, value } = verifySchema.validate(req.body);
  if (error) return res.render('verify', { mobile: req.body.mobile, error: error.details[0].message });

  let user = await User.findOne({ mobile: value.mobile });
  if (!user) return res.render('verify', { mobile: value.mobile, error: 'No OTP requested.' });

  const ok = await user.verifyOTP(value.otp);
  if (!ok) return res.render('verify', { mobile: value.mobile, error: 'Invalid or expired OTP.' });

  user.otpHash = undefined;
  user.otpExpires = undefined;
  await user.save();

  res.render('success');
};
