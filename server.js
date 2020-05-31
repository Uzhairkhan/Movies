const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 3786;
const mongoose = require("./config/database");
const genre = require("./config/apis/genre");
const movies = require("./config/apis/movies");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/genre", genre);
app.use("/movies", movies);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
