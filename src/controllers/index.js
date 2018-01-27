import mongoose from 'mongoose'
import {Contact} from '../models'
import {port} from '../config'


export const postContact = (req, res) => {
  let newContact = new Contact(req.body)
  newContact.save((err, contact) => {
    if (err) {
      res.send(err)
      return
    }
    res.json(contact)
  })
}
export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err)
      return
    }
    res.json(contact)
  })
}
export const getContact = (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err)
    }
    res.json(contact)
  })
}
export const putContact = (req, res) => {
  Contact.findOneAndUpdate(
    {_id: req.params.contactID},
    req.body,
    {new: true},
    (err, contact) => {
      if (err) {
        res.send(err)
      }
      res.json(contact)
    }
  )
}
export const deleteContact = (req, res) => {
  Contact.remove(
    {_id: req.params.contactID},
    (err) => {
      if (err) {
        res.send(err)
      }
      res.json({
        message: 'Successfully deleted'
      })
    }
  )
}
export const getDefault = (req, res) => {
  res.send(`server is servin on ${port}`)
}
