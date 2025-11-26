/*
Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, 
mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. 
Use o parâmetro pré-definido para lidar com isso.
*/

const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function saudacao(nome) {
    return `Olá, ${nome}! Tudo bem?`
}

leitor.question(
    'Qual é o seu nome?\n> ', (nome) => {
        console.log(saudacao(nome))
        leitor.close()
    }
)