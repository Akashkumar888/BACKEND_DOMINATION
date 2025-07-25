
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Payment = require('../models/Payment');

const {
  CASHFREE_APP_ID,
  CASHFREE_SECRET_KEY,
  CASHFREE_ENV,
  BASE_URL
} = process.env;

const BASE_API = CASHFREE_ENV === "prod"
  ? "https://api.cashfree.com/pg"
  : "https://sandbox.cashfree.com/pg";

const headers = {
  "x-client-id": CASHFREE_APP_ID,
  "x-client-secret": CASHFREE_SECRET_KEY,
  "x-api-version": "2022-09-01",
  "Content-Type": "application/json"
};

// 🏠 EJS Homepage
router.get("/", (req, res) => {
  res.render("index");
});

// ✅ Create Payment Link
router.post("/create-payment", async (req, res) => {
  const { name, email, amount } = req.body;

  const orderId = "order_" + Date.now();

  const body = {
    customer_details: {
      customer_name: name,
      customer_email: email,
    },
    order_id: orderId,
    order_amount: amount,
    order_currency: "INR",
    order_meta: {
      return_url: `${BASE_URL}/verify-payment?order_id={order_id}`,
    },
  };

  try {
    const response = await axios.post(
      `${BASE_API}/orders`,
      body,
      { headers }
    );

    await Payment.create({
      orderId,
      linkId: response.data.order_id,
      customerName: name,
      customerEmail: email,
      amount,
    });

    res.redirect(response.data.payment_link);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.send("Error creating payment");
  }
});

// ✅ Verify Payment (redirect)
router.get("/verify-payment", async (req, res) => {
  const { order_id } = req.query;

  try {
    const response = await axios.get(
      `${BASE_API}/orders/${order_id}`,
      { headers }
    );

    const paymentStatus = response.data.order_status;

    await Payment.findOneAndUpdate(
      { orderId: order_id },
      { status: paymentStatus }
    );

    res.render("success", {
      status: paymentStatus,
      payment: response.data,
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.send("Error verifying payment");
  }
});

module.exports = router;

