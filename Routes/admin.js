const { Router } = require("express");

const adminRouter = Router();
const adminModel = require("../db")

adminRouter.post('/signup', function(req, res) {

    res.json({
        message: "you signed up successfully"
    })

});

adminRouter.post('/signin', function(req, res) {

    res.json({
        message: "you signed in successfully"
    })

});

adminRouter.post('/course', function(req, res) {

    res.json({
        message: "created course succesfully"
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