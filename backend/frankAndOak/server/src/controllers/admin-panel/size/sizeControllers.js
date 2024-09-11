const Size = require("../../../models/size/size");

const addSize = async (req, res) => {
    const data = {
        name: 'xxl',
        order:6
    }

    const dataToSave = new Size(data);

    const response = await dataToSave.save();

    console.log(response);
};

const viewSizes = async (req, res) => {
    try{
        const sizes = await Size.find();

        res.status(200).json({message:'success', sizes})
    }
    catch(error){
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = {
    addSize,
    viewSizes
}