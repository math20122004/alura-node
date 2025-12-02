const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

delete pessoa.cpf;
console.log(pessoa);

function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`tem o troféu ${trofeu}`);
    }
}
exibeTrofeus(pessoa.trofeus);

const cliente = {
  nome: 'Joana A',
  score: 865,
  recorrente: true,
  tags: ['premium', 'clube'],
  saudarCliente: function() {
    console.log(`boas vindas, ${this.nome}`);
  }
};

/*
const cliente = {
  nome: "Joana A",
  score: 865,
  recorrente: true,
  tags: ["premium", "clube"],
  saudarCliente() {
    console.log(`boas vindas, ${this.nome}`);
  }
};*/


cliente.saudarCliente();

cliente.informarScore = function informarScore() {
  console.log(`seu score é ${this.score}`);
};

cliente.informarScore();

pessoa.calculaIdade = function calculaIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0, 4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`A idade é ${idade}`);
}

pessoa.calculaIdade()

console.log(pessoa);

console.log(Object.keys(cliente));
console.log(Object.values(cliente));
console.log(Object.entries(cliente)); //CRIA UM ARRAY DE ARRAYS CONTENDO CHAVE VALOR.
//EX: Saída: [['nome', 'Joana A'], ['cpf', '12345678987'], ['email', 'j@j.com'], ['score', 865], ['recorrente', true], ['tags', ['premium', 'clube']]]

for (const info in cliente) {
  const texto = `chave ${info}, valor do tipo ${typeof cliente[info]}`;
  console.log(texto);
}

// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

const clientes = [
    {
        nome: 'Marina M',
        ativo: true,
    },
    {
        nome: 'Rafael R',
        ativo: false,
    },
    {
        nome: 'Fabio F',
        ativo: false,
    },
];

for (const client of clientes) {
    const status = client.ativo ? 'ativo' : 'inativo';
    console.log(`status cliente ${client.nome}: ${status}`);
}