const pessoa = {
    nome: 'Lucas',
    idade: 17,
    profissao: 'Estudante'
};

console.log(pessoa.nome);
console.log(pessoa.idade);

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

// É boas práticas, para saber que estamos recendo um objeto, mas só queremos o nome e a idade
function saudacao({ nome, idade }) {
    console.log('Olá,', nome);
    if (idade > 18) {
        console.log('maior de idade');
    }
}