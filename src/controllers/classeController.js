var classeModel = require("../models/classeModel");

function buscarClasseDoUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    usuarioModel.buscarClasseUsuario(idUsuario)
        .then(function (usuario) {
            return classeModel.buscarPorId(usuario[0].fk_classe);
        })
        .then(function (classe) {
            res.status(200).json(classe);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function listarClasses(req, res) {
  classeModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;
  console.log('ID no controller:', id); 
  
  classeModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  buscarPorId,
  listarClasses,
  buscarClasseDoUsuario
};
