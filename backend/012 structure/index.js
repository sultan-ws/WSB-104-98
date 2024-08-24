const express = require('express');
const allRoutes = require('./src/app');
require('dotenv').config();

const app = express();

app.use(allRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});

// mongodb+srv://sultanwscube:WkNaz41L6gxs0UXB@sultan.f3yzdsd.mongodb.net/your_database_name_here?retryWrites=true&w=majority&appName=sultan