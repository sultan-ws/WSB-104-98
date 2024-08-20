const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})

const fileUpload = multer({storage:storage}).single('profile');

const multipleFile = multer({storage:multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})}).array('images', 5);


const multipleFields = multer({storage:multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})}).fields([
    {name:'thumbnail', maxCount:1},
    {name:'images', maxCount:10}
]);

app.use(express.json());

app.post('/insert-data',fileUpload, (req,res)=>{
    console.log(req.body);
    res.send('hello');
});

app.post('/mutiple-file-upload', multipleFile, (req,res)=>{
    res.send('done');
})

app.post('/mutiple-fields', multipleFields, (req,res)=>{
    res.send('done');
})

app.listen(5200, ()=>{
    console.log('Server is running on port 5200')
});