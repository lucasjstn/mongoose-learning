const mongoose = require("mongoose")

//create a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
})

//create and export the model of that schema
module.exports = mongoose.model("User", userSchema)
