const nodemailer = require('nodemailer');
require('dotenv').config();


const sendMail = () => {
    const transPorter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.APP_PASS
        }
    });


    transPorter.sendMail({
        from: process.env.USERMAIL,
        to: 'keshave.nathh@gmail.com',
        subject: 'Welcome keshav',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            background-color: red;
            height: 100vh;
            display: grid;
            place-items: center;
            color: white;
        }
    </style>
</head>
<body>
    <div>
        <img src='https://storage.googleapis.com/test-fire-49f19.appspot.com/ccb62333-5947-4a03-a415-b56544413670.jpg' />
        <h1>Welcome Keshave</h1>
    </div>
</body>
</html>`
    }, (error, success) => {
        if (error) return console.log(error);
        console.log('mail sent');
    })

};

sendMail();