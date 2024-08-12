const express = require('express');

const app = express();

const router1 = express.Router();
const router2 = express.Router();


const m1 = (req,res, next)=>{
    console.log("Middleware 1");
    next();
}


const m2 = (req,res, next)=>{
    console.log("Middleware 2");
    next();
}

const m3= (req,res, next)=>{
    console.log("Middleware 3");
    next();
}

app.use(m1)

router1.use(m2);
router2.use(m3)

router1.get('/api1', (req,res)=>{
    console.log('finction called');
    res.send('hello')
});

router1.get('/api2', (req,res)=>{
    console.log('finction called');
    res.send('hello')
});

router2.get('/api3', (req,res)=>{
    console.log('finction called');
    res.send('hello')
});

router2.get('/api4', (req,res)=>{
    console.log('finction called');
    res.send('hello')
});

router2.get('/api5', (req,res)=>{
    console.log('finction called');
    res.send('hello 5')
});

app.use('/users', router1);
app.use('/admin', router2);

app.listen(5400, ()=>{
    console.log('server started at port 5400');
})