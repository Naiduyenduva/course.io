const { Router } = require("express");
const adminRouter = Router();
const  { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_ADMIN } = require("../config");
const {adminMiddleware} = require("../middlewares/admin")
const bcrypt = require("bcrypt");

adminRouter.post('/signup', async function(req, res) {

    const { email, password, firstName, lastName } = req.body;

    const hashedPassword =await bcrypt.hash(password,10);

    await adminModel.create({
        email: email,
        password: hashedPassword,
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
    });

    const checkPassword = bcrypt.compare(password,admin.password);

    if(admin && checkPassword) {
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

adminRouter.put('/course',adminMiddleware, async function(req, res) {
      
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    },{
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "you changed the course successfully",
        courseId: course.id
    })

});

adminRouter.get('/course/bulk',adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId
    });

    res.json({
        message: "get all the courses",
        courses
    })

});

module.exports = {
    adminRouter: adminRouter
}