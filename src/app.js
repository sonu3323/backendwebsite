const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./modles/UserSchema");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 8000;

const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");

app.set("views", templatePath);
hbs.registerPartials(partialsPath);
app.use(express.urlencoded({ expanded: false }));

app.get("/", (req, res) => {
  res.render("index");
});

// contact page route *************
app.get("/contact", (req, res) => {
  res.render("contact");
  console.log(req);
});

//Get data from contact page::::

app.post("/contact", async (req, res) => {
  try {
    const user = new User(req.body);

    const createdUser = await user.save();

    res.status(200).send(createdUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log("Server is running well on Port");
});
