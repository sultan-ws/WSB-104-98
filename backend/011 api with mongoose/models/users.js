const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    price:Number,
    description:String,
    thumbnail:String,
    images:Object
});

const Products = mongoose.model('products', userSchema);

module.exports = Products;