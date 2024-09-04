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

        // if(error.code === 11000) return res.status(400).json({message: 'parent category already exists'});
        res.status(500).json({message: 'internal server error'});
    }
};


const readParentCategories = async(req, res)=>{
    try{
        const response = await parentCategory.find();        
        
        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

const updateStatus = async(req, res)=>{
    if(!req.params._id) return res.status(400).json({message:'please send category id'});
    try{

        
        
        const response = await parentCategory.updateOne(
            req.params,
            {
                $set:{status: req.body.newValue}
            }
        );    
        
        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

const readParentCategoryById = async(req, res)=>{
    try{
        const response = await parentCategory.findById(req.params._id);

        if(!response) return res.status(400).json({message: 'plaese send a valid id'});

        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = {
    insertParentCategory,
    readParentCategories,
    updateStatus,
    readParentCategoryById
}