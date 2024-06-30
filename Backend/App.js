//pass = N4W8kECFZRPaP8YN

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();

//Middleware

app.use(express.json());
app.use("/users", router);

mongoose
  .connect(
    "mongodb+srv://kavigayashan149:N4W8kECFZRPaP8YN@cluster0.fafkutn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("conected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })

  .catch((err) => console.log(err));
