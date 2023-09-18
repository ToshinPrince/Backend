import express from "express";

const app = express();
const port = 3000;

// There are Four Types of Middleware
// Pre-Processing, Logging, Authentication, Error

// Here we are making custom Middleware
function logger(req, res, next) {
  console.log("Request Method:", req.method);
  console.log("Requiest URL:", req.url);
  //next function is used to continue to the next thing
  //the order is very imp
  //if next not used then it will not move to next method
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
