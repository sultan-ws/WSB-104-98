const express = require('express');

const insertData = require('./controllers/insertData');
const fileUpload = require('./middlewares/multer');

const app = express();

app.post('/insert-data', fileUpload, insertData);

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});