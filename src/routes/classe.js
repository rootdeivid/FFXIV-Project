var express = require("express");
var router = express.Router();

var classeController = require("../controllers/classeController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/classes", function (req, res) {
    classeController.listarClasses(req, res);
});

router.get("/classes/usuario/:id", function (req, res) {
    classeController.buscarClasseDoUsuario(req, res);
});

module.exports = router;