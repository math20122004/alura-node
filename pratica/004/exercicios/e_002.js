/*
Escreva um programa que:

Crie um array com os valores das despesas.
Use um loop for para somar os valores.
Exiba o total gasto.
*/

const despesas = [120, 80, 45.5, 200, 60];
 
let total = 0;
 
for (let i = 0; i < despesas.length; i++) {
  total += despesas[i];
}
 
console.log(`Total de despesas: R$ ${total}`);