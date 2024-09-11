const express = require('express');
const { viewSizes } = require('../../../controllers/controllers');

const sizeRoutes = express.Router();

sizeRoutes.get('/view-sizes', viewSizes);

module.exports = sizeRoutes;