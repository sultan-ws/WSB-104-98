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
    activeParentCategories,
    searchParentCategories
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
const { addProductToCart, viewCart } = require('./website/cart/cartControllers');
const { buySomething } = require('./website/payment-gateway/paymentControllers');

//user controllers
const { registerUser } = require('./website/users/userControllers');


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
    readProducts,
    searchParentCategories,
    registerUser,
    addProductToCart,
    viewCart,
    buySomething
};