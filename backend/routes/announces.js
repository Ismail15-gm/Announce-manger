const express = require("express")

const {
  createAnnounce,
  getAnnounce,
  getAnnounces,
  deleteAnnounce,
  updateAnnounce,
} = require("../controllers/announceController")

const router = express.Router()

//get all workout
router.get("/", getAnnounces)

//get single workout
router.get("/:fieldName/:fieldValue", getAnnounce)

//add single workout
router.post("/", createAnnounce)

//delete single workout
router.delete("/:id", deleteAnnounce)

//update
router.patch("/:id", updateAnnounce)

module.exports = router
