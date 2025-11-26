/*
Escreva um programa que:

Crie um array com os itens iniciais da lista de compras.
Acesse e exiba o segundo item da lista.
Modifique o último item da lista para um novo valor.
*/

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
 
console.log("Segundo item da lista:", listaDeCompras[1]);
 
listaDeCompras[listaDeCompras.length - 1] = 'fruta';
 
console.log("Lista após modificação:", listaDeCompras);