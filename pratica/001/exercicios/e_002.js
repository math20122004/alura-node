/**
Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. 
Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

Menor que 15: "Frio"
De 15 a 25: "Agradável"
Acima de 25: "Quente"

Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente. 
*/
const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é a temperatura?\n>', (temp) => {
    if (temp > 0 && temp <= 15) {
        console.log('Frio');
    } else if (temp > 15 && temp <= 25) {
        console.log('Agradável');
    } else if (temp > 25) {
        console.log('Quente');
    } else {
        console.log('Temperatura Inválida.');
    }

    leitor.close()
})