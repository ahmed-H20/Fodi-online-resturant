const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');

//Middleware
app.use(cors());
app.use(express.json());

mongoose
.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@resturant-fodi.q0nh8vw.mongodb.net/?retryWrites=true&w=majority&appName=Resturant-fodi`)
.then(
  console.log("mongoDB connect successfully!")
)
.catch((error)=>console.log("error in mongo DB",error))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
