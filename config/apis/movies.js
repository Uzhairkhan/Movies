const express = require("express");
const router = express.Router();
const movieController = require("../../app/controllers/moviesController");

router.get("/test", (req, res) => res.json({ msg: "movie test" }));

router.get("/list", movieController.list);
router.get("/show/:id", movieController.show);
router.post("/add", movieController.add);
router.put("/update/:id", movieController.update);
router.delete("/delete/:id", movieController.delete);

module.exports = router;
