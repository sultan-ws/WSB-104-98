const otpData = require('../../../data/support');
const Admin = require('./../../../models/admin/admin');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

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
        const otpDataMap = otpData;
        const sentOtp = otpDataMap.get(req.body.email);

        if(Number(req.body.userotp )!== (sentOtp)) return res.status(401).json({message:'please enter a valid otp'});

        const response = await Admin.updateOne(
            req.params,
            {
                $set:{email:req.body.newemail}
            }
        );

        res.status(200).json({message:'email has updated', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
}

const updateAdmin = async(req,res)=>{

    const data = req.body;

    const predata = await Admin.findById(req.params._id);


    if(req.files){
        const  filePath = path.join(__dirname,'src','uploads');

        if(req.files.logo){
            data.logo = req.files.logo[0].filename

            if(fs.existsSync(`${filePath}/${predata[0].logo}`)){
                fs.unlinkSync(`${filePath}/${predata[0].logo}`)
            }
        }

        if(req.files.favicon){
            data.favicon = req.files.favicon[0].filename
            if(fs.existsSync(`${filePath}/${predata[0].favicon}`)){
                fs.unlinkSync(`${filePath}/${predata[0].favicon}`)
            }
        }

        if(req.files.footer_icon){
            data.footer_icon = req.files.footer_icon[0].filename
            if(fs.existsSync(`${filePath}/${predata[0].footer_icon}`)){
                fs.unlinkSync(`${filePath}/${predata[0].footer_icon}`)
            }
        }
        if(req.files.profile){
            data.profile = req.files.profile[0].filename
            if(fs.existsSync(`${filePath}/${predata[0].profile}`)){
                fs.unlinkSync(`${filePath}/${predata[0].profile}`)
            }
        }
    }

    console.log(data);

    try{
        const response = await Admin.updateOne(
            req.params,
            {
                $set:data
            }
        )
        res.status(200).json({ message: 'data updated successfully', data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = {
    registerAdmin,
    adminLogin,
    genrateOtp,
    updateEmail,
    updateAdmin
};