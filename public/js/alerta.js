var alertas = [];

function obterdados(id_registro) {
    fetch(`/medidas/rankingClass/${id_registro}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, id_registro);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${id_registro} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}
