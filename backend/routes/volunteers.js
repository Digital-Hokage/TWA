const Volunteer = require('../models/Volunteer')

module.exports = async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body)
    await volunteer.save()
    res.status(201).json({ message: 'Volunteer registration successful', id: volunteer._id })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}