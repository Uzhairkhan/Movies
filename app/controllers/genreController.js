const Genre = require("../models/Genre");

module.exports.list = (req, res) => {
  Genre.find()
    .select("name")
    .then((list) => res.json(list))
    .catch((err) => res.send(err));
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Genre.findOne({ _id: id })
    .select("name")
    .then((genre) => res.json(genre))
    .catch((err) => res.send(err));
};

module.exports.add = (req, res) => {
  const genreName = req.body;
  const genre = new Genre(genreName);
  genre
    .save()
    .then((genre) => res.json(genre))
    .catch((err) => res.send(err));
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Genre.findOneAndUpdate({ _id: id }, body, { new: true })
    .then((updatedGenre) => res.json(updatedGenre))
    .catch((err) => res.send(err));
};

module.exports.delete = (req, res) => {
  const id = req.params.id;
  Genre.findOneAndDelete({ _id: id })
    .select("name")
    .then((delGenre) => res.json(delGenre))
    .catch((err) => res.send(err));
};
