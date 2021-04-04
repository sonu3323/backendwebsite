const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/sonu", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Monogdb server running very well");
  })
  .catch((err) => {
    console.log(err);
  });
