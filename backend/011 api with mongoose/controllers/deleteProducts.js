const { existsSync } = require("fs");
const Products = require("../models/users");
const path = require('path');
const fs = require('fs');

const deleteProducts = async (req, res) => {
    try {
        console.log(req.params._id);
        const response = await Products.findOne(req.params);

        if (!response) return res.status(404).json({ message: 'data not found' });

        console.log(response.images);

        response.images.forEach((image) => {
            if (existsSync(path.join('uploads', image))) {
                fs.unlinkSync(path.join('uploads', image));
            }
        });

        if(existsSync(path.join('uploads', response.thumbnail))){
            fs.unlinkSync(path.join('uploads', response.thumbnail));
        }


        const data = await Products.deleteOne(req.params);

        res.status(200).json({ message: 'data deleted successfully', data:data });
    }
    catch (error) {
        console.log(error.kind);
        if (error.kind === 'ObjectId') return res.status(403).json({ message: 'please enter a valid id' });
        res.status(500).json({ message: 'internal server error' });
    }
};

module.exports = deleteProducts;