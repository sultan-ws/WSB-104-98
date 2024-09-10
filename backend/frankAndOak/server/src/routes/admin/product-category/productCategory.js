const express = require('express');
const { 
    insertProductCategory, 
    viewProductCategory
} = require('../../../controllers/controllers');
const parentCatUploads = require('../../../middlewares/parentCategoryMulter');

const productCategoryRoutes = express.Router();

productCategoryRoutes.post('/insert-product-category', parentCatUploads, insertProductCategory);
productCategoryRoutes.get('/view-product-categories', viewProductCategory);

module.exports = productCategoryRoutes;