const express = require('express');
const { addProductToCart, viewCart } = require('../../../controllers/controllers');

const cartRouter = express.Router();

cartRouter.post('/add-product', addProductToCart);
cartRouter.get('/view-cart/:user_id', viewCart);

module.exports = cartRouter;