const { Router } = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { userModel, purchaseModel, courseModel } = require("../db");
const { JWT_SECRET_USER } = require("../config");
const userRouter = Router();
const { userMiddleware } = require("../middlewares/user");


userRouter.post('/signup',async function(req, res) {

    const { email, password, fullName } = req.body;

    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({ message: "Email is already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
        email: email,
        password: hashedPassword,
        fullName: fullName
    })

    res.json({
        message: "you signed up successfully"
    })

});

userRouter.post('/signin', async function(req, res) {
    const { email, password } = req.body;

   const user = await userModel.findOne({
        email:email,
    });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const checkPassword = bcrypt.compare(password,user.password)

    if(user && checkPassword) {
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

userRouter.post('/purchases', userMiddleware,async function(req, res) {
    const userId = req.userId;

    const purchasedData = await purchaseModel.find({
        userId
    })

    let purchaseID = [];

    for(let i=0;i<purchasedData.length;i++) {
        purchaseID.push(purchasedData[i].courseId);
    }

    const courseData = await courseModel.find({
        _id: { $in: purchaseID }
    })
    res.json({
        message: "You purchased the course succesfully",
        courseData
    })
});

module.exports = {
    userRouter: userRouter
}