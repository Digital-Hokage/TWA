const mongoose = require('mongoose')

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  skills: [String],
  availability: String,
  message: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Volunteer', volunteerSchema)