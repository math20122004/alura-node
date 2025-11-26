let var1 = 20
let var2 = 19

console.log('Igual? ', var1 == var2)
console.log('Diferente? ', var1 != var2)
console.log('Maior? ', var1 > var2)
console.log('Menor? ', var1 < var2)
console.log('Maior ou Igual? ', var1 >= var2)
console.log('Menor ou Igual? ', var1 <= var2)
console.log('Maior? ', var1 == var2)
console.log('Maior? ', var1 == var2)
console.log('São estritamente iguais?', '36' === 36);
console.log('São estritamente diferentes?', '36' !== 36);

let var3 = true
let var4 = false
let var5 = false
let var6 = true

console.log('Comparador AND: ', (var3 == var6) && (var4 == var5))
console.log('Comparador AND: ', (var3 == var4) && (var4 == var6))
console.log('Comparador OR: ', (var3 == var4) || (var4 == var6))
console.log('Comparador OR: ', (var3 == var6) || (var4 == var5))
console.log('\n----------------------------\n')
console.log('Comparador NOT: ', !(var3 == var6) && (var4 == var5))
console.log('Comparador NOT: ', !(var3 == var4) && !(var4 == var6))
console.log('Comparador NOT: ', (var3 == var4) || !(var4 == var6))
console.log('Comparador NOT: ', !(var3 == var6) || !(var4 == var5))