const express = require('express');
const { 
    adminLogin, 
    genrateOtp,
    updateEmail
 } = require('../../../controllers/controllers');

const adminRoutes = express.Router();

adminRoutes.post('/log-in', adminLogin);
adminRoutes.post('/genrate-otp', genrateOtp);
adminRoutes.post('/update-email/:_id', updateEmail);

module.exports = adminRoutes;