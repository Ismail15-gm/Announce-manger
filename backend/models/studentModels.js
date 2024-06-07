const mongoose = require("mongoose")
const Schema = mongoose.Schema
const StudentSchema = new Schema(
  {
    codE: {
      type: String,
      required: true,
      unique: true,
    },
    niveau: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
      enum: ["info", "Fid", "elec", "meca", "gee", "indus", "btb"," "],
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "chef", "admin", "teatcher"],
    },
  },
  { timestamps: true }
) // this one add creat date auto maybe even the update one

module.exports = mongoose.model("Student", StudentSchema)

//
