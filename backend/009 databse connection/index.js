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

// insertdata();

const readData = async()=>{
    const db = await connection();
    const admins = db.collection('admins');

    const response = await admins.find().toArray();
    console.log(response);
}

readData();

const updatedata = async()=>{
    const db = await connection();
    const admins = db.collection('admins');

    const response = await admins.updateOne({name:'hello'},{$set:{name:'updated'}});
    console.log(response);
}

// updatedata();

const deleteData = async()=>{
    const db = await connection();
    const admins = db.collection('admins');

    const response = await admins.deleteOne({name:'hello'});
    console.log(response);
}
// deleteData();


const softDelete = async()=>{
    const db = await connection();
    const admins = db.collection('admins');

    const response = await admins.updateOne({name:'hello'},{$set:{deleted_at: Date.now()}});
    console.log(response);
}
// softDelete();


app.listen(5200, ()=>{
    console.log('server is running on port 5200');
})