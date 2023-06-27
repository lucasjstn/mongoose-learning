const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
  street: String,
  city: String
})
//create a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    //using min and max h
    min: 1,
    max: 100,
    //using validate functions at the schrma
    validate: {
      validator: v => v % 2 === 0,
      message: props => `${props.value} is not an even number`,
    }
  }, 
  //example of a required property
  email: {
    type: String,
    required: true,
    //using lowercase
    lowercase: true,
    //minLength and MaxLength property
    minLength: 10,
    maxLength: 30
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
