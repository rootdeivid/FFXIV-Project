var express = require("express");
var router = express.Router();

var classeController = require("../controllers/classeController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/classes/:id", function (req, res) {
    console.log('ID recebido:', req.params.id); 
    classeController.buscarPorId(req, res);
});

router.get("/classes/usuario/:idUsuario", function (req, res) {
    classeController.buscarClasseDoUsuario(req, res);
});

module.exports = router;