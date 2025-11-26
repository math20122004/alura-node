/*
Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. 
Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente.
A regra é a seguinte:

Até 5 km: frete fixo de R$ 5
De 5.1 km até 20 km: R$ 0,50 por quilômetro
Acima de 20 km: frete fixo de R$ 20
*/

const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcularFrete(km) {
    if (km <= 5) {
        return 5
    } else if (km > 5 && km <= 20){
        return km * 0.50
    } else {
        return 20
    }
}

leitor.question('Digite a quilometragem: ', (km) => {
    console.log(calcularFrete(Number(km)));

    leitor.close()
})