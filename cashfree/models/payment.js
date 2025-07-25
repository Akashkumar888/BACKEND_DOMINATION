
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  linkId: { type: String, required: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "PENDING" },
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);

