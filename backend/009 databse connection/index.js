const express = require('express');
const mongodb = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'wsb_104_98';
const client = new mongodb.MongoClient(url);

const connection = async()=>{
    await client.connect();

    const db = client.db(dbName);

    return db;
    // .then(()=>{
    //     console.log('databse connected')
    //     const db = client.db(dbName);
    //     console.log(db);
    //     return db;

       
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })

}

const app = express();


const insertdata = async()=>{
    const db = await connection();
    const admins = db.collection('admins');


    const response =await admins.insertOne({
        name:"hello",
        age: 25,
    });

    console.log(response);

};

insertdata();


app.listen(5200, ()=>{
    console.log('server is running on port 5200');
})