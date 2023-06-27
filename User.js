const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
  street: String,
  city: String
})
//create a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: String,
  updatedAt: String,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  //using a schema as property
  address: addressSchema 
})

//create and export the model of that schema
module.exports = mongoose.model("User", userSchema)
