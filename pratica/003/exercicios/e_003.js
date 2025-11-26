/*
Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.
*/

const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite a primeira nota: ', (n1) => {
    leitor.question('Digite a segunda nota: ', (n2) => {
        const caculaMedia = (n1, n2) => {return (n1 + n2) / 2}
        
        console.log(caculaMedia(Number(n1), Number(n2)));
        
        leitor.close()
    })
})