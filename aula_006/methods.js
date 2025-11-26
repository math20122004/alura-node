const numeros = [1,2,3,4,5,6,7,8,9]

console.log(numeros)

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

console.log(numerosPares)

const numerosDobrados = numeros.map((n)=> n * 2)

console.log(numerosDobrados)

numeros.shift() //Remove a primeira linha

console.log(numeros)

//-----------------------------------

const soma = numeros.reduce((acumulador, n) => acumulador + n, 0)

console.log("Soma total:", soma)

const notas = [10,9,4,8]

const soma2 = notas.reduce((acumulador, n) => acumulador + n, 0)

console.log(soma2 / notas.length)

//-----------------------------------

let usuarios = ["Laura", "Rafa", "Tiago"]; 

usuarios.forEach(function(usuario) { 
    console.log("Olá, " + usuario + "!"); 
});

//-----------------------------------
let precos = [100, 200, 300]; 

let comDesconto = precos.map(function(preco) { 
    return preco * 0.9; 
}); 

console.log("Preços com 10% de desconto:", comDesconto); 

// -----------------------------------------------------

let carrinho = [50, 30, 20]; 

let total = carrinho.reduce(function(acumulador, item) { 
    return acumulador + item; 
}, 0); 

let comCupom = total * 0.8; 

console.log("Total com desconto de 20%: R$" + comCupom.toFixed(2)); 

//-----------------------------------------------------------------------

let tarefas = ["[ ] Estudar", "[x] Lavar a louça", "[ ] Ir ao mercado", "[x] Caminhar", "[ ] Dormir"]; 

let pendentes = tarefas.filter(function(tarefa) { 
    return tarefa.startsWith("[ ]"); 
}); 

console.log("Tarefas pendentes:", pendentes); 