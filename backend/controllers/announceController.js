const { json } = require("express")
const Announce=require("../models/announceModels")
const mongoose = require("mongoose")


//USE THIS TO const workout=await Workout.find({rep:20}) all workouts wher reps 20


//get all student
const getAnnounces = async (req, res) => {
  try {
    const announces = await Announce.find({}).sort({ createdAt: -1 })
    console.log(announces)
    //console.log(json(workouts))
    res.status(200).json(announces)
  } catch (err) {
    res.status(404).json({ mss: err.message })
  }
}

//get a single student
const getAnnounce = async (req, res) => {
  const { fieldName, fieldValue } = req.params;
  try {
    const query = {};
    query[fieldName] = fieldValue;
    const announces = await Announce.find(query);
    res.status(200).json(announces);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}



//creat new student
const createAnnounce = async (req, res) => {
  const { description, maker,isValideAdmin,isValideChef,filier,year } = req.body

  //add doc to db
  try {
    const announce= await Announce.create({ description, maker,isValideAdmin,isValideChef,year,filier })
    res.status(200).json(announce)
  } catch (err) {
    res.status(404).json({ mssg: err.message })
  }
}

//delete a student
const deleteAnnounce = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" })
  }
  try {
    const announce = await Announce.findOneAndDelete({ _id: id })
    res.status(200).json(announce)
  } catch (err) {
    res.status(404).json({ mss: err.message })
  }
}
//update a student

const  updateAnnounce = async (req, res) => {
  const { id } = req.params

  if (false) {                  //!mongoose.Types.ObjectId.isValid(id)
    return res.status(404).json({ error: "No such announce" })
  }
  try {
    //const { codE, firstName, lastName,email,password } = req.body
    const announce = await Announce.findOneAndUpdate({ _id: id }, { ...req.body }) //Arg criteria of search second {title:"abah" ,...}
    res.status(200).json(announce)
  } catch (err) {
    res.status(404).json({ mss: err.message })
  }
}

module.exports = {
  createAnnounce,
  getAnnounce,
  getAnnounces,
  deleteAnnounce,
  updateAnnounce,
}
