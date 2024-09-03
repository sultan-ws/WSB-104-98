const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads')
    },
    filename:(req, file, cb)=>{
        const extName = path.extname(file.originalname);

        cb(null, Date.now() + Math.floor(Math.random() * 99999) + extName); 
    }
})

const parentCatUploads = multer({storage:storage}).single('thumbnail');

module.exports = parentCatUploads;