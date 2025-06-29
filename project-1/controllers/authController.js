const bcrypt = require('bcrypt');
const User = require('../models/User');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const token = crypto.randomBytes(32).toString('hex');

  await User.create({ name, email, password: hashed, verificationToken: token });

  const link = `${req.protocol}://${req.get('host')}/auth/verify/${token}`;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  await transporter.sendMail({
    to: email,
    subject: 'Verify your Email',
    html: `Click <a href="${link}">here</a> to verify`
  });

  res.render('auth/verify');
};

exports.verifyEmail = async (req, res) => {
  const user = await User.findOne({ verificationToken: req.params.token });
  if (!user) return res.send('Invalid token');

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();

  res.redirect('/auth/login');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.isVerified) return res.send('User not found or not verified');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send('Wrong credentials');

  req.login(user, err => {
    if (err) return res.send('Login failed');
    res.redirect('/dashboard');
  });
};

exports.logout = (req, res) => {
  req.logout(() => res.redirect('/'));
};
