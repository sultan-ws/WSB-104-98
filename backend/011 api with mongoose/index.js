const express = require('express');
require('./db/config');

const insertData = require('./controllers/insertData');
const fileUpload = require('./middlewares/multer');
const readProducts = require('./controllers/readProducts');
const deleteProducts = require('./controllers/deleteProducts');
const updateProduct = require('./controllers/updateProduct');

const app = express();
app.use('/uploads' ,express.static('uploads'));

app.post('/insert-data', fileUpload, insertData);
app.get('/read-products', readProducts);
app.delete('/delete-product/:_id', deleteProducts);
app.put('/update-product/:_id',fileUpload, updateProduct);

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});