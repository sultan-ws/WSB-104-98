const parentCategory = require("../../../models/parent-category/parentCategory");

const insertParentCategory = async(req, res)=>{
    try{
        const data = req.body;

        // if(!req.file) return res.status(400).json({message:'please add a thumbnail'});

        // data.thumbnail = req.file.filename;

        const dataToSave = new parentCategory(data);
        const response = await dataToSave.save();
        
        
        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = {
    insertParentCategory
}