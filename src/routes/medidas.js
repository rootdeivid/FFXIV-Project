var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/rankingRace", function (req, res) {
    medidaController.rankingRaceControl(req, res);
});

router.get("/rankingClass", function (req, res) {
    medidaController.rankingClassControl(req, res);
})

module.exports = router;