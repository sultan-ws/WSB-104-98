const express = require('express');
const adminRoutes = require('./routes/admin/admin/admin');
const parentCategoryRouter = require('./routes/admin/parent-category/parentCategory');
const productCategoryRoutes = require('./routes/admin/product-category/productCategory');
const sizeRoutes = require('./routes/admin/size/size');
const colorRoutes = require('./routes/admin/color/color');
const productRouter = require('./routes/admin/product/product');
const userRouter = require('./routes/website/user/user');
const cartRouter = require('./routes/website/cart/cart');

const allRoutes = express.Router();

const websiteRouter = express.Router();
const adminRouter = express.Router();
// const appRouter = express.Router();


//admin panel routes
adminRouter.use('/admin', adminRoutes);
adminRouter.use('/parent-category', parentCategoryRouter);
adminRouter.use('/product-category', productCategoryRoutes);
adminRouter.use('/size', sizeRoutes);
adminRouter.use('/color', colorRoutes);
adminRouter.use('/product', productRouter);

//website routes
websiteRouter.use('/user', userRouter);
websiteRouter.use('/cart', cartRouter);




allRoutes.use('/franandoak-services', websiteRouter);
allRoutes.use('/admin-panel', adminRouter);

module.exports = allRoutes