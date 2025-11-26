const readline = require('readline') // Carregar biblioteca em node

const reader = readline.createInterface ({
    input: process.stdin, //diz que a entrada é o terminal
    output: process.stdout //diz que a saída é o terminal
})

reader.question('What\'s your name? ', (name) => {
    console.log(`Hello. Welcome, ${name}! `)
    reader.question('What\'s your age? ', (age) => {
        if (age >= 18) {
            console.log('You can have a driver\'s license.')
        } else {
            console.log('You can\'t have a driver\'s license.')
        }
        reader.close() //Fechar leitor
    })
})