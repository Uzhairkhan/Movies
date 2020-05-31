const Movies = require("../models/Movies");

module.exports.list = (req, res) => {
  Movies.find()
    .populate("genre", ["name"])
    .select("image title year description genre director")
    .then((list) => res.json(list))
    .catch((err) => res.send(err));
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Movies.findOne({ _id: id })
    .populate("genre", ["name"])
    .select("image title year description genre director")
    .then((movie) => res.json(movie))
    .catch((err) => res.send(err));
};

module.exports.add = (req, res) => {
  // res.send(req.body)
  const movie = new Movies(req.body);
  movie
    .save()
    .then((movie) => res.json(movie))
    .catch((err) => res.send(err));
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Movies.findOneAndUpdate({ _id: id }, body, { new: true })
    .then((movie) => res.json(movie))
    .catch((err) => res.send(err));
};

module.exports.delete = (req, res) => {
  const id = req.params.id;
  Movies.findOneAndDelete({ _id: id })
    .then((movie) => res.json(movie))
    .catch((err) => res.send(err));
};
