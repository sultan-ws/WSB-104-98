// admin controllers

const { 
    adminLogin, 
    genrateOtp, 
    updateEmail,
    updateAdmin
} = require('./admin-panel/admin/adminController');


module.exports = {
    adminLogin,
    genrateOtp,
    updateEmail,
    updateAdmin
};