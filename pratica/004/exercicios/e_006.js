/*
Crie um array com alguns pedidos.
Faça uma cópia do array.
Adicione um novo item apenas na cópia.
Exiba os dois arrays para mostrar que o original não foi alterado.
*/

const pedidos = ['camiseta', 'calça', 'tênis'];

const pedidosCopia = pedidos.slice();

pedidosCopia.push('boné');

console.log("Array original:", pedidos);
console.log("Array copiado:", pedidosCopia);