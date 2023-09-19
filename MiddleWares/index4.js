import express from "express";
import bodyParser from "body-parser";
// To Dynamically obtain the directory name of the current module file
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandNAme = "";

app.use(bodyParser.urlencoded({ extended: true }));

//Custom middleware
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandNAme = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name is:</h1><h2>${bandNAme}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
