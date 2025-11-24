var medidaModel = require("../models/medidaModel");

function rankingRaceControl(req, res) {

    const limite_linhas = 7;

    // var id_registro = req.params.id_registro;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.rankingRaceControl(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function rankingClassControl(req, res) {

    var id = req

    console.log(`Verificando...`);

    medidaModel.rankingClassControl(id).then(function (resultado2) {
        if (resultado2.length > 0) {
            res.status(200).json(resultado2);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    rankingRaceControl,
    rankingClassControl

}