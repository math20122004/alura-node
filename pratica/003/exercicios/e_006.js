/*
Imagine que você está criando uma função que simula o processamento de um pedido em um site. 
Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar 
dependendo do tipo de cliente: comum, vip ou novo usuário.

Sua tarefa é criar uma função chamada processarPedido, que receba dois parâmetros:

o nome do cliente, e
uma função de callback responsável por exibir uma mensagem após o pedido ser processado.
*/

function processarPedido(nome, tipo, funcao) {
    return funcao(nome, tipo)
}

function mensagemPersonalizada(nome, tipo){
    if (tipo === 'vip') {
        return `
Processando pedido de ${nome}...
Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`
    } else if (tipo === 'novo') {
        return `
Processando pedido de ${nome}...
Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`
    } else if (tipo === 'comum') {
        return `
Processando pedido de ${nome}...
Obrigado pela sua compra, ${nome}!`
    } else {
        return 'Obrigado!'
    }
}

console.log(processarPedido("Lucas", "vip", mensagemPersonalizada));
console.log(processarPedido("Fernanda", "novo", mensagemPersonalizada));
console.log(processarPedido("João", "comum", mensagemPersonalizada));