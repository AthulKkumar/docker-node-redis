const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");
const app = express();

mongoose
  .connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World??");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
