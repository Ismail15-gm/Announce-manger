const mongoose = require("mongoose")
const Schema = mongoose.Schema

const announceSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    maker: {
      type: String,
      required: true,
    },
    filier: {
      type: String,
      require: true,
    },
    year: {
      type: String,
      require: true,
    },
    isValideChef: {
      type: Boolean,
      default: false,
      require: false,
    },
    isValideAdmin: {
      type: Boolean,
      default: false,
      require: false,
    },
  },
  { timestamps: true }
) // this one add creat date auto maybe even the update one

module.exports = mongoose.model("Announce", announceSchema)
