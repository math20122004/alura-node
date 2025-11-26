/*
Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

o preço original do produto,
a porcentagem de desconto (com um valor padrão de 10%).
*/

const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcularDesconto(valor, desconto){
    if (typeof valor !== 'number' || typeof desconto !== 'number') return 0
    return valor - ((desconto / 100) * valor) 
}

leitor.question('Qual o valor do produto?\n> ', (valor) =>{
    leitor.question('Qual o valor do desconto?\n> ', (desconto) => {
        console.log(calcularDesconto(Number(valor), Number(desconto)));
        leitor.close()
    })
})

