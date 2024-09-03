const express = require('express');
const adminRoutes = require('./routes/admin/admin/admin');
const parentCategoryRouter = require('./routes/admin/parent-category/parentCategory');

const allRoutes = express.Router();

const websiteRouter = express.Router();
const adminRouter = express.Router();
// const appRouter = express.Router();


//admin panel routes
adminRouter.use('/admin', adminRoutes);
adminRouter.use('/parent-category', parentCategoryRouter);


//website routes






allRoutes.use('/franandoak-services', websiteRouter);
allRoutes.use('/admin-panel', adminRouter);

module.exports = allRoutes