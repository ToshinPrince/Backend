import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //javaScript -> getDay method, where sunday=0 all the way to saturday=6
  const today = new Date();
  const day = today.getDay();
  // console.log(day);

  let type = "a Weekday";
  let adv = "its's time to work hard";

  if (day === 0 || day === 6) {
    type = "the Weekend";
    adv = "its's time to have someFun";
  }
  //render -> we are passing ejs dynamic file
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server Rung at port: ${port}`);
});
