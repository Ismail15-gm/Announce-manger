const express = require("express")

const {
  createStudent,
  getStudent,
  getStudents,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentController")

const router = express.Router()

//get all account
router.get("/", getStudents)

//get single account
router.get("/:fieldname/:fieldvalue", getStudent)

//add single account
router.post("/", createStudent)

//delete single account
router.delete("/:fieldname/:fieldvalue", deleteStudent)

//update account
router.patch("/:id", updateStudent)

module.exports = router
