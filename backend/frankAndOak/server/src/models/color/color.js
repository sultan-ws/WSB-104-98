const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    name: String,
    code: String,
    status:{
        type: Boolean,
        default: true
    }
});

const Color = mongoose.model('colors', colorSchema);

module.exports = Color;