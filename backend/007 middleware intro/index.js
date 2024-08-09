const express = require('express');
const key = '10498';

const app = express();

const validateKey = (req,res,next) => {
    if (!req.params.key) return res.send('please send a key')
    if (req.params.key !== key) return res.send('please enter a valid key');

    next();
};

// app.use(validateKey);

app.get('/user/:key?',validateKey, (req, res) => {

    res.send('hello user')
});

app.get('/user-again/:key?', validateKey, (req, res) => {
    res.send('hello user again')
})


app.listen(5200, () => {
    console.log('server is running on port 5200');
})