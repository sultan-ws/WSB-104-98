const mongoose = require('mongoose');
const { registerAdmin } = require('../controllers/admin-panel/admin/adminController');
require('dotenv').config();

const url = `mongodb+srv://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_USER_PASSWORD}.f3yzdsd.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=${process.env.DATABASE_APP_NAME}`;

mongoose.connect(url)
.then(()=>{
    console.log('Connected to MongoDB');
    registerAdmin();
})
.catch((error)=>{
    console.log(error);
})