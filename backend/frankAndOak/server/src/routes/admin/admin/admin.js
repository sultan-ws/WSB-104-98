const express = require('express');
const { 
    adminLogin, 
    genrateOtp,
    updateEmail,
    updateAdmin
 } = require('../../../controllers/controllers');
const adminUploads = require('../../../middlewares/adminMulter');

const adminRoutes = express.Router();

adminRoutes.post('/log-in', adminLogin);
adminRoutes.post('/genrate-otp', genrateOtp);
adminRoutes.post('/update-email/:_id', updateEmail);
adminRoutes.put('/update-admin/:_id', adminUploads, updateAdmin);

module.exports = adminRoutes;