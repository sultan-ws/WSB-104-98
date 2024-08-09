const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('home route')
});

app.post('/', (req,res)=>{
    res.send('home route post')
})


// app.get('/about', (req,res)=>{
//     res.send('hello about 01')
// })

app.get('/about/:id?', (req,res)=>{
    res.send('hello about')
})


app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})