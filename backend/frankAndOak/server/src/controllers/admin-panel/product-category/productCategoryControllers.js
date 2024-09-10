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

const viewProductCategory = async (req, res)=>{
    try{
        const response = await ProductCategory.find().populate('parent_category');

        if(response.length === 0) return res.status(404).json({message: 'no product category available'});

       const dataWithPath =  response.map((category)=>(
        category.thumbnail =  `${req.protocol}://${req.get('host')}/frankandoak-files/${category.thumbnail}`
       ))

        const file_path = `${req.protocol}://${req.get('host')}/frankandoak-files/`;

        res.status(200).json({message:'success', data: response, file_path});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'})
    }
};

module.exports = {
    insertProductCategory,
    viewProductCategory
};