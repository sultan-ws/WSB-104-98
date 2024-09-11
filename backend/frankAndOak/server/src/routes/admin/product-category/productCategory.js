const express = require('express');
const { 
    insertProductCategory, 
    viewProductCategory,
    activeProductCategory
} = require('../../../controllers/controllers');
const parentCatUploads = require('../../../middlewares/parentCategoryMulter');

const productCategoryRoutes = express.Router();

productCategoryRoutes.post('/insert-product-category', parentCatUploads, insertProductCategory);
productCategoryRoutes.get('/view-product-categories', viewProductCategory);
productCategoryRoutes.get('/active-product-categories', activeProductCategory);

module.exports = productCategoryRoutes;