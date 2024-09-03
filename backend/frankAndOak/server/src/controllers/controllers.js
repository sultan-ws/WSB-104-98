// admin controllers
const { 
    adminLogin, 
    genrateOtp, 
    updateEmail,
    updateAdmin
} = require('./admin-panel/admin/adminController');

//parent category controllers
const { 
    insertParentCategory 
} = require('./admin-panel/parent-category/parentCategoryController');


module.exports = {
    adminLogin,
    genrateOtp,
    updateEmail,
    updateAdmin,
    insertParentCategory
};