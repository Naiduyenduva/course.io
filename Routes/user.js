const { Router } = require("express");
const userRouter = Router();

userRouter.post('/signup', function(req, res) {

    res.json({
        message: "you signed up successfully"
    })

});

userRouter.post('/signin', function(req, res) {

    res.json({
        message: "you signed in successfully"
    })

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