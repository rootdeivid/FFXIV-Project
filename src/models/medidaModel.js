var database = require("../database/config");

function rankingRaceControl(limite_linhas) {

    var instrucaoSql = `SELECT
    raca AS raca,
    COUNT(raca) AS quantidade
    FROM usuario GROUP BY raca ORDER BY id DESC LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingClassControl() {

    var instrucaoSql = `SELECT
    classe,
    COUNT(classe) AS qtd
    FROM usuario GROUP BY classe ORDER BY id DESC LIMIT 7;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    rankingRaceControl,
    rankingClassControl
}
