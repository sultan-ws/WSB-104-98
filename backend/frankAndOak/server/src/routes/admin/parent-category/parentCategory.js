const express = require('express');
const { insertParentCategory } = require('../../../controllers/controllers');
const parentCatUploads = require('../../../middlewares/parentCategoryMulter');

const parentCategoryRouter = express.Router();

parentCategoryRouter.post('/insert-parent-category', insertParentCategory);


module.exports = parentCategoryRouter;