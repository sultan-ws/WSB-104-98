const express = require('express');
const { adminLogin } = require('../../../controllers/controllers');

const adminRoutes = express.Router();

adminRoutes.post('/log-in', adminLogin);

module.exports = adminRoutes;