const fruits = ['Uva', 'Morango', 'Manga', 'Pera', 'Kiwi', 'Banana', 'Maçã']

console.log(fruits);

fruits.splice(2, 1) //1ºP: Índice do item | 2ºP: Quantos

console.log('After remove: ', fruits)

for (let i = 0; i < fruits.length; i++){
    console.log(`Índice: ${i} - ${fruits[i]}`)
}

console.log('Usando forEach: ')

fruits.forEach((value, indice) => {
    console.log(`índice ${indice} - ${value}`)
})

console.log('Usando for-of: ')

for (const fruit of fruits) {
    console.log('Fruit: ', fruit)
}

