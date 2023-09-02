import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>I am a developer!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me through LinkedIn!</h1>");
});

app.get("/career", (req, res) => {
  res.send("<h1>!</h1>");
});

app.listen(port, () => {
  console.log(`server Running on port ${port}`);
});
