/* Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. 
Exiba a mensagem informando se o acesso foi ou não permitido.*/
const readline = require ('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual a sua idade?\n> ', (age) => {
    if (age >= 18){
        console.log('Acesso liberado.');
    } else if (age < 18) {
        console.log('Acesso negado.');
    } else {
        console.log('Idade inválida.');
    }

    leitor.close()
})