const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    // thumbnail:{
    //     type:String,
    //     required:true
    // },
    description:String,
    status:{
        type:Boolean,
        default:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:Date,
    deleted_at:Date
});

const parentCategory = mongoose.model('parent_categories', catSchema);

module.exports = parentCategory;