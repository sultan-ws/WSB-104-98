const express = require('express');
const { trueColors } = require('../../../controllers/controllers');

const colorRoutes = express.Router();

colorRoutes.get('/view-colors', trueColors);

module.exports = colorRoutes;