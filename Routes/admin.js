const { Router } = require("express");
const adminRouter = Router();
const  { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_ADMIN } = require("../config");
const {adminMiddleware} = require("../middlewares/admin")

adminRouter.post('/signup', async function(req, res) {

    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    });

    res.json({
        message: "you signed up successfully"
    })


});

adminRouter.post('/signin', async function(req, res) {

    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email:email,
        password: password
    });

    if(admin) {
        const token = jwt.sign({
            id: admin._id
        },JWT_SECRET_ADMIN);

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "wrong credentials"
        });
    }

});

adminRouter.post('/course',adminMiddleware, async function(req, res) {
     
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: " course created succesfully",
        courseId: course._id
    })

});

adminRouter.put('/course', function(req, res) {

    res.json({
        message: "you changed the course successfully"
    })

});

adminRouter.get('/course/bulk', function(req, res) {

    res.json({
        message: "Get your all courses"
    })

});

module.exports = {
    adminRouter: adminRouter
}