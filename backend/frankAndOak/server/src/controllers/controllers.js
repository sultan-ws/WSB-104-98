// admin controllers
const { 
    adminLogin, 
    genrateOtp, 
    updateEmail,
    updateAdmin
} = require('./admin-panel/admin/adminController');

//parent category controllers
const { 
    insertParentCategory, 
    readParentCategories,
    updateStatus,
    readParentCategoryById,
    updateParentCategory,
    deleteParentCategory
} = require('./admin-panel/parent-category/parentCategoryController');


module.exports = {
    adminLogin,
    genrateOtp,
    updateEmail,
    updateAdmin,
    insertParentCategory,
    readParentCategories,
    updateStatus,
    readParentCategoryById,
    updateParentCategory,
    deleteParentCategory
};