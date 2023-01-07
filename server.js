///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config()
const {PORT = 4000} = process.env
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  // Connection Events
  mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));


///////////////////////////////
// ROUTES
////////////////////////////////

app.get("/", (req, res) => {
    res.send("Hello World")
})

///////////////////////////////
// LISTENER
////////////////////////////////

app.listen(PORT, () => console.log(`listening on port ${PORT}`))