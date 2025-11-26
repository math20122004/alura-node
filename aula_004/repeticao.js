for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log('\n-------------\n')

for (let i = 1; i <= 20; i++){
    if (i % 2 == 0) {
        console.log(`Number: ${i} is even.`)
    } else {
        console.log(`Number: ${i} is odd.`)
    }
}

console.log('\n-------------\n')

const word = 'Matheus'

for (let i = 0; i < word.length; i++){
    console.log(word[i])
}

console.log('\n-------------\n')

let counter = 1

// Enquanto true faça. ---VERIFICA ANTES DE FAZER---
while (counter <= 10) {
    console.log('Number: ', counter)
    counter++
}

console.log('\n-------------\n')

let counter2 = 11

// FAZ DEPOIS VERIFICA
do {
    console.log('Number: ', counter2)
    counter2++
} while (counter2 <= 10)
