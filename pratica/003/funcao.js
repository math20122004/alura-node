function calculaPotencia(num, pow) {
  let resultado = 1;
  for (let i = 0; i < pow; i++) {
    resultado = resultado * num;
  }
  return resultado;
};

console.log(calculaPotencia(4, 3));
console.log(calculaPotencia(4, 3));
console.log(calculaPotencia(5, 5));
console.log(calculaPotencia(3, 4));

// ----------Expressão de Função
// Funções nomeadas podem ser chamadas em qualquer ponto do código, funções anônimas só podem ser chamadas após
// a leitura dela

const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
}

console.log(fatorial(5)); // 5! = 120 
/* -- Ela guarda o valor na memoria e vai abrindo as funções, depois vai se resolvendo de tras para frente
5 * fatorial(4) // 120
4 * fatorial(3) // 24
3 * fatorial(2) // 6
2 * fatorial(1) // 2
*/

// ----------------Arrow Function

//Formula=valor*(juros elevado a tempo)
const calculaJuros = (valor, juros, tempo) => {
  let taxaJuros = (juros/100) + 1;
  return valor * Math.pow(taxaJuros, tempo);
}

// ----------------Callback

function soma(a, b) { return a + b };
function multiplica(a, b) { return a * b };

function calcula(fnOperacao, valorA, valorB) {
  return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));

const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`);
//No setTimeout o 3 parametro recebe os parametros que está sendo passado dentro
setTimeout(avisaUsuario, 2000, userId);
// setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 4000, userId);