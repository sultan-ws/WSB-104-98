// admin controllers
const { 
    adminLogin, 
    genrateOtp, 
    updateEmail,
    updateAdmin
} = require('./admin-panel/admin/adminController');
const { trueColors } = require('./admin-panel/color/colorControllers');

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
    insertProductCategory,
    viewProductCategory,
    activeProductCategory
 } = require('./admin-panel/product-category/productCategoryControllers');

 // product controllers
const { 
    addProduct,
    readProducts 
} = require('./admin-panel/product/productControllers');


const { viewSizes } = require('./admin-panel/size/sizeControllers');


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
    insertProductCategory,
    viewProductCategory,
    viewSizes,
    trueColors,
    activeProductCategory,
    addProduct,
    readProducts
};