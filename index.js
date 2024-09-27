const express = require('express');
const { userRouter } = require('./Routes/user');
const { courseRouter } = require('./Routes/course');
const { adminRouter} = require('./Routes/admin');
const app = express();


app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);


app.listen(3000);