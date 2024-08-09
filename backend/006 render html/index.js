const express = require('express');
const path = require('path');

const app = express();

const file_path = path.join(__dirname, 'public');
app.use(express.static(file_path));

app.get('/', (req,res)=>{
    res.sendFile(`${file_path}/home.html`);
})

app.get('/about', (req,res)=>{
    res.sendFile(`${file_path}/about.html`)
})


app.get('/*', (req,res)=>{
    res.sendFile(`${file_path}/404.html`)
})


app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})