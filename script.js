const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: "./config.env"})

const User = require("./User")

mongoose.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true}).then(()=>{
  console.log("data base connected")
})

//creating an instance of a new User

//saving the user to the database
//user.save().then(()=> { consolelog("User saved")})

async function run() {
  try {


    const user = await User.create({ name: "lucas", age: 24, email: "lucas7justino@gmail.com"})
    // const user = new User({ name: "kyle", age: 22})
    // await user.save()
    console.log(user)
  } catch (error) {
    console.log(error.message)
  }
}

run()


