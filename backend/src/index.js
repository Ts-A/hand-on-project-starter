require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { PORT, MONGODB_URL } = process.env;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("connected"))
  .catch(console.log);

app.get("/ping", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(PORT, () => console.log(`Backend server started at port: ${PORT}`));
