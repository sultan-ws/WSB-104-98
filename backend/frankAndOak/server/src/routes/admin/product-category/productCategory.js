const express = require('express');
const { 
    insertProductCategory 
} = require('../../../controllers/controllers');
const parentCatUploads = require('../../../middlewares/parentCategoryMulter');

const productCategoryRoutes = express.Router();

productCategoryRoutes.post('/insert-product-category', parentCatUploads, insertProductCategory);

module.exports = productCategoryRoutes;