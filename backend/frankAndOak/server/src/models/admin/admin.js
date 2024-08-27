const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:String,
    facebook:String,
    insta:String,
    linked_in:String,
    twitter:String,
    pinterest:String,
    logo: String,
    fav_icon: String,
    footer_logo: String,
    password: String,
    email: String
});

const Admin = mongoose.model('admins', adminSchema);

module.exports = Admin;