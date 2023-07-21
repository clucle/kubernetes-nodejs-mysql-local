
const express = require("express");
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log("Server running on port", port);
});

app.get("/", (req, res, next) => {
  const mysql = require('mysql');

  try
  {
    const con = mysql.createConnection({
      host: "mysql",
      user: "root",
      password: "password",
      database: 'test'
    });
  
    con.connect(function (err) {
      if (err) {
        res.send(err);
        throw err;
      }
      console.log("Connected!");
      res.send("Connected");
    });
  }
  catch(err)
  {
    console.log(err);
    res.send(err);
  }
});
