const express = require('express');
const adminRoutes = require('./routes/admin/admin/admin');

const allRoutes = express.Router();

allRoutes.use('/admin', adminRoutes);

module.exports = allRoutes