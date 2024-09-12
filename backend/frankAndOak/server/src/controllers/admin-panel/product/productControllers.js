const Product = require("../../../models/product/product");

const addProduct = async(req, res) =>{
    try{
        const data = req.body;

        data.colors = JSON.parse(data.colors);
        data.sizes = JSON.parse(data.sizes);

        if(req.files){
            if(req.files.thumbnail){
                data.thumbnail = req.files.thumbnail[0].filename
            }

            if(req.files.hover_thumbnail){
                data.hover_thumbnail = req.files.hover_thumbnail[0].filename
            }

            if(req.files.images){
                data.images = req.files.images.map((image) => image.filename)
            }
        }

        console.log(data);

        const dataToSave = new Product(data);

        const response = await dataToSave.save();        

        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

const readProducts = async (req, res) => {
    try{
        const response = await Product.find()
        .populate('sizes')
        .populate('colors')
        .populate({
            path: 'category',
            populate:{
                path: 'parent_category',
                model:'parent_categories'
            }
        });

        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = {
    addProduct,
    readProducts
};