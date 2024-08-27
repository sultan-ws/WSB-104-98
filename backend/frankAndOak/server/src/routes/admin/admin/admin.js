const express = require('express');
const { adminLogin } = require('../../../controllers/admin/adminController');

const adminRoutes = express.Router();

adminRoutes.post('/log-in', adminLogin);

module.exports = adminRoutes;