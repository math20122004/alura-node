const pessoa = {
    nome: 'Vinicios',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}

for(const chave in pessoa) {
    console.log('Chave: ', chave);
    console.log('Valor: ', pessoa[chave]);
}

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log('Chaves:', chaves);
console.log('Valores:', valores);
console.log('Entradas (chave/valor):', entradas);

const pessoas = [ 
    { nome: "Ana", idade: 17 }, 
    { nome: "Carlos", idade: 22 }, 
    { nome: "Mariana", idade: 15 } 
]; 

// 8. Objeto com método 

const usuario = { 
    nome: "Beatriz", 
    saudacao: function() { 
        console.log(`Olá, eu sou ${this.nome}`); 
    } 
}; 

usuario.saudacao(); 

//----------------------

const produto = { 
    preco: 25, 
    quantidade: 4 
}; 
const valorTotal = produto.preco * produto.quantidade; 

console.log(`Valor total da compra: R$${valorTotal}`);

//--------------------------------------------

let respostaDoServidor = '{"nome":"João","idade":30}';

let objeto = JSON.parse(respostaDoServidor); 
console.log(objeto.nome); // Resultado: João 
//--
let pessoa2 = { nome: 'João', idade: 30 }; 

let json = JSON.stringify(pessoa2); 
console.log(json); // Resultado: '{"nome":"João","idade":30}' 