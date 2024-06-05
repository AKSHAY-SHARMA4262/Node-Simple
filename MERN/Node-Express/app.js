const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post((req, rs, next) => {
  res.send("<h1>User: " + req.body.username + "</h1>");
});

app.get("/", (req, res, next) => {
  res.send(
    '<form method="post"><input type="text" name="userName"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);
