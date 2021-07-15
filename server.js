//Importing Modules
import express from "express"
import * as studentDb from "./data/student-db.js"

//Create Express App

const app = express()

//Configure the App

app.set("view engine", "ejs")

//Mount Middleware


//Mount Routes
app.get("/", (req, res) => {
 res.send('<h1>Good Morning Students</h1>')
})

app.get("/", (req, res) => {
 res.redirect("/home")
})

app.get("/home", (req, res) => {
 res.render("home")
})

app.get("/students", (req, res) => {
 studentDb.find({}, (err, students) => {
  res.render("students/index", {
   students, 
   err
  })
 })
})



//Tell the App to Listen on port 3000

app.listen(3000, () => {
 console.log("Listening on port 3000")
})