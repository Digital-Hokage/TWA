const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'TWA Backend is running' })
})

// Simple donation endpoint
app.post('/api/donations/create-order', (req, res) => {
  const { amount } = req.body
  res.json({ 
    orderId: 'order_' + Date.now(), 
    amount: amount * 100,
    message: 'Order created successfully' 
  })
})

// Simple volunteer endpoint
app.post('/api/volunteers', (req, res) => {
  res.status(201).json({ 
    message: 'Volunteer registration successful', 
    id: 'vol_' + Date.now() 
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log('Backend ready for frontend connection')
})