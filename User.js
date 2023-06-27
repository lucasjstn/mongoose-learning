const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
  street: String,
  city: String
})
//create a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  //example of a required property
  email: {
    type: String,
    required: true,
    //using lowercase
    lowercase: true,
  },
  //using dedault
  createdAt: {
    type: Date,
    default: ()=> Date.now(),
    //using immutable propertie
    immutable: true,
  }, 
  updatedAt: {
    type: Date,
    default: ()=> Date.now()
  }, 

  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  //using a schema as property
  address: addressSchema 
})

//create and export the model of that schema
module.exports = mongoose.model("User", userSchema)
