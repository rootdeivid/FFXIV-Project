var database = require("../database/config");

function buscarPorId(idUsuario) {
  var instrucaoSql = `SELECT u.id, c.nome, c.forca, c.destreza, c.vitalidade, c.destreza, c.inteligencia FROM classes c JOIN usuario u ON u.fk_classe = c.id 
  WHERE c.nome = u.classe AND u.id ='${idUsuario}'`;

  console.log(`Recebendo ID do Usuario no Models ${idUsuario}`);

  return database.executar(instrucaoSql);
}

function buscarClasseUsuario(id) {
  var instrucaoSql = `SELECT * FROM classes WHERE id = '${id}'`;
  return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, buscarClasseUsuario };