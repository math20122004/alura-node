/*
Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e 
retorne a string:

"Par" se o número for par
"Ímpar" se for ímpar
*/

const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o número: ', (n) => {
    const verificarParidade = (n1) => {
        if (n1 % 2 === 0) {
            return 'Par'
        } 
        return 'Ímpar'
    }
    
    console.log(verificarParidade(Number(n)));
    
    leitor.close()
    
})