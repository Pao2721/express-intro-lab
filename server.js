//Importing Modules
import express from "express"
import * as students from "./data/students.js"
//Create Express App

const app = express()

//Configure the App

app.set("view engine", "ejs")

//Mount Middleware


//Mount Routes
app.get("/", (req,res) => {
 res.redirect("/home")
})

app.get("/home", (req, res) => {
 res.render("home")
})

app.get("/students", (req,res) => {
 students.find({}, (err, students) => {
  res.render("student/index"), {
   student, 
   err
  }
 })
})



//Tell the App to Listen on port 3001

app.listen(3001, () => {
 console.log("Listening on port 3001")
})