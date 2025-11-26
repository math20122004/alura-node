/*Você está criando um sistema de análise para um cliente que precisa identificar todos os números pares dentro 
de um intervalo informado. Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados 
financeiros.*/
const numeroFinal = 200

for(let i = 1; i <= numeroFinal; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}