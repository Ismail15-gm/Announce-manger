const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");

require("dotenv").config()

const studentRoutes = require("./routes/students")
const announceRoutes = require("./routes/announces")

const app = express()

app.get("/",(req,res)=>{
  res.json("Hello Me")
})

mongoose
  .connect(process.env.MONGO_UI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 5000")
    })
  })
  .catch((err) => {
    console.log(err)
  })

//middleware
app.use(express.json()) //to have access to req.body---- it s the json we attach to the request

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})



// Enable CORS for all routes
app.use(cors());


//routes

app.use("/api/students", studentRoutes)
app.use("/api/announces", announceRoutes)
