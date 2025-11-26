/*
Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

o nome do usuário, e
uma função de callback que será executada após 3 segundos.
*/

function responderUsuario(nome, callback) {
    console.log("Processando sua pergunta...");
    setTimeout(() => {
        callback(nome);
    }, 3000);
}
 
function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}
 
responderUsuario("Alícia", mostrarResposta);