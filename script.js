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
    //returning a sjngle user
    const user = await User.where.findByName("l")
    console.log(user)
  } catch (error) {

  }
}

run()


