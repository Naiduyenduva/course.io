const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { userModel } = require("../db");
const { JWT_SECRET_USER } = require("../config");
const userRouter = Router();


userRouter.post('/signup',async function(req, res) {

    const { email, password, firstName, lastName } = req.body;

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "you signed up successfully"
    })

});

userRouter.post('/signin', async function(req, res) {
    const { email, password } = req.body;

   const user = await userModel.findOne({
        email:email,
        password: password
    });

    if(user) {
        const token = jwt.sign({
            id: user._id
        },JWT_SECRET_USER);

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "wrong credentials"
        });
    }

});

userRouter.post('/purchases', function(req, res) {
    res.json({
        message: "You purchased the course succesfully"
    })
});

userRouter.get('/course/preview', function(req, res) {
    res.json({
        message: "all courses"
    })
});

module.exports = {
    userRouter: userRouter
}