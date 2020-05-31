const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  year: {
    type: String,
  },
  description: {
    type: String,
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: "Genre",
  },
  director: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Movie = mongoose.model("Movie", moviesSchema);
