const { json } = require("express")
const Student = require("../models/studentModels") // the Schema
const mongoose = require("mongoose")

//USE THIS TO const workout=await Workout.find({rep:20}) all workouts wher reps 20

//get all student
const getStudents = async (req, res) => {
  try {
    const students = await Student.find({}).sort({ createdAt: -1 })
    console.log(students)
    //console.log(json(workouts))
    res.status(200).json(students)
  } catch (err) {
    res.status(404).json({ mss: err.message })
  }
}

//get a single student
const getStudent = async (req, res) => {
  const { fieldname, fieldvalue } = req.params
  if (false) {
    return res.status(404).json({ error: "No such Student" })
  }
  try {
    const student = await Student.findOne({ [fieldname]: fieldvalue })
    res.status(200).json(student)
  } catch (err) {
    res.status(404).json({ mss: err.message })
  }
}

//creat new student
const createStudent = async (req, res) => {
  const { firstName, lastName, codE, email, password, niveau, field, role } =
    req.body

  //add doc to db
  try {
    const student = await Student.create({
      firstName,
      lastName,
      codE,
      email,
      password,
      niveau,
      field,
      role,
    })
    res.status(200).json(student)
  } catch (err) {
    res.status(404).json({ mssg: err.message })
  }
}

//delete a student
const deleteStudent = async (req, res) => {
  const { fieldname, fieldvalue } = req.params
  if (false) {
    return res.status(404).json({ error: "No such workout" })
  }
  try {
    const student = await Student.findOneAndDelete({ [fieldname]: fieldvalue })
    res.status(200).json(student)
  } catch (err) {
    res.status(404).json({ mss: err.message })
  }
}
//update a student

const updateStudent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such student" })
  }
  try {
    //const { codE, firstName, lastName,email,password } = req.body
    const student = await Student.findOneAndUpdate({ _id: id }, { ...req.body }) //Arg criteria of search second {title:"abah" ,...}
    res.status(200).json(student)
  } catch (err) {
    res.status(404).json({ mss: err.message })
  }
}

module.exports = {
  createStudent,
  getStudent,
  getStudents,
  deleteStudent,
  updateStudent,
}
