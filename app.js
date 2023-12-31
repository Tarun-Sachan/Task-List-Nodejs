console.log("Task Manager App");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
require("./db/connect");
//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Listening on PORT:5000.....");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
