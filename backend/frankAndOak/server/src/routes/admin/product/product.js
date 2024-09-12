const express = require('express');
const { addProduct, readProducts } = require('../../../controllers/controllers');
const multer = require('multer');
const storage = require('../../../middlewares/multer');

const uploads = multer({storage: storage('products')}).fields([
    {
        name:'thumbnail',
        maxCount: 1
    },
    {
        name:'hover_thumbnail',
        maxCount: 1
    },
    {
        name:'images',
        maxCount: 12
    }
]);

const productRouter = express.Router();

productRouter.post('/add-product', uploads, addProduct);
productRouter.get('/read-products', readProducts);

module.exports = productRouter;