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
    deleteParentCategory,
    multiDeleteParentCategory,
    activeParentCategories
} = require('./admin-panel/parent-category/parentCategoryController');

//product category controllers
const { 
    insertProductCategory
 } = require('./admin-panel/product-category/productCategoryControllers');


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
    deleteParentCategory,
    multiDeleteParentCategory,
    activeParentCategories,
    insertProductCategory
};