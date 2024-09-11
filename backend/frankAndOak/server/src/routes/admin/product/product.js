const express = require('express');
const { addProduct } = require('../../../controllers/controllers');

const productRouter = express.Router();

productRouter.post('/add-product', addProduct);

module.exports = productRouter;