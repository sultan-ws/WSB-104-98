const express = require('express');
const { readUsers } = require('../../controllers/controllers');


const userRouter = express.Router();

userRouter.get('/read-users', readUsers)
// userRouter.post('/register-user, ');


module.exports = userRouter;