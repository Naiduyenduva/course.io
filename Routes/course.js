const { Router } = require("express");

const courseRouter = Router();

courseRouter.post('/purchase', function(req, res) {
    res.json({
        message: "create a course"
    })
});

courseRouter.get('/preview', function(req, res) {
    res.json({
        message: "Get all your purchased courses"
    })
});

module.exports = {
    courseRouter: courseRouter
}
