const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  original: {
    type: String,
    required: true,
    default: false
  },
  shortenedURL: {
    type: String,
    required: true,
    default: false
  }
})
module.exports = mongoose.model('URL', urlSchema)