const bcrypt = require('bcrypt');
const User = require('../../../models/users/user');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {


    try {
        const saltRounds = 10;
        const { password, ...data } = req.body;

        bcrypt.hash(req.body.password, saltRounds,async (error, hash) => {
            if (error) return res.status(203).json({ message: 'somethin went wrong' });

            data.password = hash;

            const dataToSave = new User(data);

            const response = await dataToSave.save();

            const {password, ...responseWithoutPassword} = response._doc;

            console.log(responseWithoutPassword);

            jwt.sign(responseWithoutPassword, process.env.JWT_KEY,{expiresIn: 60}, (error, token)=>{
                if (error) return res.status(203).json({ message: 'somethin went wrong' });
                res.status(200).json({ message: "success test user", data: responseWithoutPassword, auth: token });
            })

           
        });
        
    }
    catch (error) {
        res.status(500).json({ message: 'internal server error' });
    }
};

module.exports = {
    registerUser
}