const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Schema object for menu items
const menuSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    recipe: String,
    image: String,
    category: String,
    Price: Number
})

// Create model object
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;