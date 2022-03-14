const express = require("express");
const app = express();
const menController = require("./src/controllers/men.controller");
const importData = require("./data.json");
const connect = require("./src/config/db");
let port = process.env.PORT || 3000;

app.use(express.json());
app.use("/men", menController);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/mydata", (req, res) => {
  res.send(importData);
});

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on Port http://localhost:${port}`);
  });
};
start();
