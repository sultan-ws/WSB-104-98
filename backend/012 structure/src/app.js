const express = require('express');
const userRouter = require('./routes/users/users');

const allRoutes = express.Router();


allRoutes.use('/user', userRouter);

module.exports = allRoutes;