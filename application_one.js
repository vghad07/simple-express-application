const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({
    id: 12141123,
    message: "Application is running successfully on 3000",
  });
});

app.listen(3000, () => {
  console.log("Running on 3000");
});
