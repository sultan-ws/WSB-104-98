const ProductCategory = require("../../../models/product-category/productCategory");

const insertProductCategory = async (req, res)=>{
    try{
        const data = req.body;

        if(req.file){
            data.thumbnail = req.file.filename;
        }

        const dataToSave = new ProductCategory(data);

        const response = await dataToSave.save();
        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'})
    }
};

module.exports = {
    insertProductCategory
};