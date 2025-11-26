var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM classes WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM classes`;

  return database.executar(instrucaoSql);
}

function buscarClasseUsuario(id) {
    var instrucaoSql = `SELECT fk_classe FROM usuario WHERE id = '${id}'`;
    return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, listar, buscarClasseUsuario };