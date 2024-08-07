const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Schema object for Carts
const cartSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    recipe: String,
    image: String,
    category: String,
    price: {
        type: Number,
        required: true
    },
    quantity: Number,
    email:{
        type: String,
        true: true,
        required: true,
    }
})

// Create an Object from carts model
const Carts = mongoose.model("Cart", cartSchema);

module.exports = Carts;