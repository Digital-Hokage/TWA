const mongoose = require('mongoose')

const donationSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  paymentId: String,
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' },
  donorName: String,
  donorEmail: String,
  donorPhone: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Donation', donationSchema)