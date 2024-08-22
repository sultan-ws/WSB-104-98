const Products = require("../models/users");

const readProducts = async(req,res)=>{
    try{
        const response = await Products.find();
        const path = `${req.protocol}/${req.get('host')}/uploads`;
        console.log(path);
        res.status(200).json({message:'data fetched successfully', data: response, file_path:path});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
};

module.exports = readProducts;