let var1 = true
let idade = 18
let carteira = false

if (var1){
    console.log('This is a var true.')
}

if (idade <  18 ){
    console.log('You can\'t drive.')
} else {
    console.log('You can drive.')
}

if (idade <  18){
    console.log('You can\'t drive.')
} else if (idade >= 18 && carteira){
    console.log('You can drive.')
} else if (idade >= 18 && carteira == false) {
    console.log('You can\'t drive. But you need CNH')
}

// Ternário
console.log(idade >= 18 && carteira ? 'You can drive.' : 'You can\'t drive.')

// notaDoAluno >= 4 ? console.log('mediana') :
//     notaDoAluno >= 8 ? console.log('boa') :
//         notaDoAluno == 10 ? console.log('excelente'):
//             console.log('ruim')
