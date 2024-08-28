const express = require('express');
const adminRoutes = require('./routes/admin/admin/admin');

const allRoutes = express.Router();

const websiteRouter = express.Router();
const adminRouter = express.Router();
// const appRouter = express.Router();


//admin panel routes
adminRouter.use('/admin', adminRoutes);


//website routes






allRoutes.use('/franandoak-services', websiteRouter);
allRoutes.use('/admin-panel', adminRouter);

module.exports = allRoutes