/*
Criar um array com objetos contendo nome e idade de cada participante.
Usar o método filter() para:
Selecionar somente os participantes com 18 anos ou mais.
Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
Exibir a lista de aprovados no final.
*/

const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const autorizados = participantes.filter(p => {
  p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
  return p.idade >= 18;
});

const aprovados = autorizados.map(p => p.nome);

console.log("Lista de aprovados:", aprovados);