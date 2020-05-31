const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/moviesDB", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
