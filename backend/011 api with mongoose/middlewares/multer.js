const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        // const splitArr = file.originalname.split('.');
        // const extentionName = splitArr[splitArr.length - 1];
        
        const extentionName = path.extname(file.originalname);

        cb(null, Date.now() + extentionName)
    }
});

const fileUpload = multer({storage:storage}).fields([
    { name: 'thumbnail', maxCount: 1 },
    { name : 'images', maxCount: 10 }
]);

module.exports = fileUpload;