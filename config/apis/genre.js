const express = require("express");
const router = express.Router();
const genreController = require("../../app/controllers/genreController");

router.get("/test", (req, res) => res.json({ msg: "genre test" }));

router.get("/list", genreController.list);
router.get("/show/:id", genreController.show);
router.post("/add", genreController.add);
router.put("/update/:id", genreController.update);
router.delete("/delete/:id", genreController.delete);

module.exports = router;
