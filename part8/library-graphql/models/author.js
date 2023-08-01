const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  born: {
    type: Number,
    default: null,
  },
  bookCount: {
    type: Number,
    default: 0,
  },
})

schema.plugin(uniqueValidator)

module.exports = mongoose.model("Author", schema)
