const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    short_description: String,
    thumbnail:String,
    hover_thumbnail:String,
    images:Object,
    price:Number,
    actual_price:Number,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product_categories'
    },
    stock:{
        type:Boolean,
        default:true
    },
    brand:String,
    sizes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'sizes'
    }],
    colors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'colors'
    }],
    status:{
        type:Boolean,
        default:true
    },
    created_at:{
        type:Date
    },
    updated_at:{
        type:Date
    },
    deleted_at:{
        type:Date
    }
});


const Product = mongoose.model('products', productSchema);

module.exports = Product;