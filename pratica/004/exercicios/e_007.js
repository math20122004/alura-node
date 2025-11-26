/*
Crie um array com nomes de livros.
Crie uma variável com o nome de um livro procurado.
Verifique se o livro está na lista.
Exiba uma mensagem informando se o livro foi encontrado ou não.
*/

const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

if (livros.indexOf(livroProcurado) !== -1) { //Se não for encontrado, retorna -1
  console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
  console.log(`O livro "${livroProcurado}" não foi encontrado.`);
}