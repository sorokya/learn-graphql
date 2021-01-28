const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routers);

app.listen(5000, () =>
  console.log("Server listening at http://localhost:5000")
);
