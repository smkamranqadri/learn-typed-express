/// <reference path="./typings/tsd.d.ts" />

import express = require("express");

var app = express();

app.get("/", (request : express.Request, response: express.Response) => {
  response.send("Hello world!");
});

//New Syntax for Espress5
app.get("/test", (request : express.Request, response: express.Response) => {
  response.status(200).send("Hello world!").
});

app.listen(3000, () => {
  console.log("Express app started on port 3000.");
});


