const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: "./config.env"})

mongoose.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true}).then(()=>{
  console.log("data base connected")
})

