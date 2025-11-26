/*
Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas 
etárias. As regras são:

Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".

Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.*/
const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual a idade da pessoa?\n> ', (age) => {
    if (age < 12) {
        console.log('Infantil');
    } else if (age >= 12 && age < 18) {
        console.log('Juvenil');
    } else if (age >= 18) {
        console.log('Adulto');
    } else {
        console.log('Idade Inválida');
    }

    leitor.close()
})