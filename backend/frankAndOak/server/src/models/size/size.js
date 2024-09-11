const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
    name:String,
    order:Number
});

const Size = mongoose.model('sizes', sizeSchema);

module.exports = Size;