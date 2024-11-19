require('dotenv').config()
const cors = require('cors');

const express = require('express');
const mongoose = require("mongoose");
const app = express();
app.use(cors())


const { userRouter } = require('./Routes/user');
const { courseRouter } = require('./Routes/course');
const { adminRouter} = require('./Routes/admin');

app.use(express.json());
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

const PORT = process.env.PORT || 3000;

async function main () {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT);
    console.log("port started");
}

main();

