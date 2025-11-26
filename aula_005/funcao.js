function greeting(name){
    console.log(`Hi, ${name}!`)
}

greeting('Matheus')
greeting(20)
greeting(true)

console.log('\n-------------\n')

function calculateDouble (number) {
    return number * 2
}

// com arrow function
//
// const calculateDouble = number => number * 2


console.log(calculateDouble(10))
console.log(calculateDouble(7))
console.log(calculateDouble(34.5))

console.log('\n-------------\n')

// Arrow function
const saudacao = (nome) => {
    console.log('Saudações, Sr/Sra ', nome)
}


saudacao('Claus')
saudacao('Alicia')

console.log('\n-------------\n')

// Arrow function retornando

const saudacao2 = (nome) => console.log('Olá, mestre(a)', nome)

saudacao2('Claus')
saudacao2('Alicia')

// --------------------------
// Callback e HOF

//HOF --> Higher-Order Function === Função que recebe outra função como parametro
//CALLBACK --> Passar a função como argumento

const calculate = (number1, number2, operation) => operation(number1, number2)

const sum = (number1, number2) => number1 + number2

const result = calculate(3, 4, sum);

console.log(result)