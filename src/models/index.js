import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: 'enter a first name'
  },
  lastName: {
    type: String,
    required: 'enter a last name'
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

export const Contact = mongoose.model('Contact', ContactSchema)
