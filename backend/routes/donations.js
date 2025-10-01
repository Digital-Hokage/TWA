const Razorpay = require('razorpay')
const Donation = require('../models/Donation')

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

module.exports = async (req, res) => {
  if (req.method === 'POST' && req.url.includes('create-order')) {
    try {
      const { amount } = req.body
      
      const order = await razorpay.orders.create({
        amount: amount * 100, // Convert to paise
        currency: 'INR'
      })

      const donation = new Donation({
        orderId: order.id,
        amount: amount
      })
      await donation.save()

      res.json({ orderId: order.id, amount: order.amount })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}