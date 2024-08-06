const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');

//Middleware
app.use(cors());
app.use(express().json());

mongoose.connect(`mongodb+srv://ahmedheshamahah8:xS9WGApnCwM7tzjw@resturant-fodi.q0nh8vw.mongodb.net/?retryWrites=true&w=majority&appName=Resturant-fodi`)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
