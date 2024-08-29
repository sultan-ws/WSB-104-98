// admin controllers

const { 
    adminLogin, 
    genrateOtp, 
    updateEmail
} = require('./admin-panel/admin/adminController');


module.exports = {
    adminLogin,
    genrateOtp,
    updateEmail
};