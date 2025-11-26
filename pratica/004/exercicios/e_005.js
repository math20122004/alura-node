/*
Crie um array com três tarefas iniciais.
Adicione uma nova tarefa no final da lista.
Remova a última tarefa da lista.
Exiba a lista após cada operação.
*/

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas.push('Pagar boletos');
console.log("Lista após adicionar:", tarefas);

tarefas.pop();
console.log("Lista após remover a última tarefa:", tarefas);