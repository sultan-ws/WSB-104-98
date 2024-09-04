const express = require('express');
const { insertParentCategory, readParentCategories, updateStatus, readParentCategoryById } = require('../../../controllers/controllers');

const parentCategoryRouter = express.Router();

parentCategoryRouter.post('/insert-parent-category', insertParentCategory);
parentCategoryRouter.get('/read-parent-categories', readParentCategories);
parentCategoryRouter.put('/update-status/:_id', updateStatus);
parentCategoryRouter.get('/read-category-by-id/:_id', readParentCategoryById);


module.exports = parentCategoryRouter;