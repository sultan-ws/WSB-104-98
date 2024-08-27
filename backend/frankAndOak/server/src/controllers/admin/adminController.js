const Admin = require('../../models/admin/admin');

require('dotenv').config();

const registerAdmin = async()=>{
    const preData = await Admin.find();

    if(preData.length !== 0 ) return console.log(preData);

    const data = {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    };

    const dataToSave = new Admin(data);
    const response = await dataToSave.save();

    console.log(response);

    
};

const adminLogin = async(req,res)=>{
    try{
        const ifValidEmail = await Admin.find({ email:req.body.email });

        if(ifValidEmail.length === 0) return res.status(400).json({ message: 'invalid admin email '});

        if(ifValidEmail[0].password !== req.body.password) return res.status(401).json({ message: 'invalid password '});

        res.status(200).json({ message: 'admin logged in', data:  ifValidEmail});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
}

module.exports = {
    registerAdmin,
    adminLogin
};