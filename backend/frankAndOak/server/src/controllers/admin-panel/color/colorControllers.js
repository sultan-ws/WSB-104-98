const Color = require("../../../models/color/color");

const addColor = async( req, res ) => {
    const data = {
        name: 'dark grey',
        code: '#212631'
    };

    const dataToSave = new Color(data);

   const response = await dataToSave.save();

   console.log(response);

};

const trueColors = async ( req, res ) => {
    try{
        const response = await Color.find({status: true});

        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = {
    addColor,
    trueColors
}