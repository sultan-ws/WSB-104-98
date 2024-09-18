const Cart = require("../../../models/cart/cart");

const addProductToCart = async (req, res) =>{ 

    try{
        const dataToSave = new Cart(req.body);

        const response = await dataToSave.save();

        res.status(200).json({message: 'success', data: response});


    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server'});
    }
};

const viewCart = async (req, res)=>{
    try{
        console.log(req.params);
        const response = await Cart.find(req.params)
        .populate('color_id')
        .populate('size_id')
        .populate('user_id', 'firstname lastname')
        .populate('product_id');

        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server'});
    }
}

module.exports = {
    addProductToCart,
    viewCart
}