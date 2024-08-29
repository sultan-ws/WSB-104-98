const otpData = require('../../../data/support');
const Admin = require('./../../../models/admin/admin');
const nodemailer = require('nodemailer');

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

const genrateOtp = async(req, res)=>{
    try{
        const { email } = req.body;

       const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.ADMIN_MAIL,
            pass: process.env.ADMIN_APP_PASSWORD
        }
       });

       const otp = Math.floor(Math.random() * 1000000);


       const otpDataMap = otpData;
          otpDataMap.set(email, otp);
    

       const mailOptions = {
        from: 'noreply@mail.com',
        to: email,
        subject:'Otp for email update',
        text: `Your otp is ${otp}`
       }

       transporter.sendMail(mailOptions,(error, success)=>{
        if(error) return res.status(500).json({message: 'otp could not genrate'})

            res.status(200).json({message:'otp has sent'});
       })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

const updateEmail = async(req,res)=>{
    try{
        const {_id} = req.params;
        const otpDataMap = otpData;
        console.log(otpDataMap.get('sultan.khan@wscubetech.com'));
        res.status(200).json({message:'otp has sent'});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
}

module.exports = {
    registerAdmin,
    adminLogin,
    genrateOtp,
    updateEmail
};