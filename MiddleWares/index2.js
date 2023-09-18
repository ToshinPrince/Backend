import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// There are Four Types of Middleware
// Pre-Processing, Logging, Authentication, Error
// morgan is Logging Middleware

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
