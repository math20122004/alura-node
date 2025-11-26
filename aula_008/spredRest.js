const aluna = {
    nome: 'Alícia',
    idade: 21,
    sexo: 'F'
}

// Usamos o spred para clonar um objeto. Spred é derramar/despejar/espalhar | Usa-se '...'

const aluna2 = {
    ...aluna,
    temCNH: true,
    profissao: 'Dev S'
}

console.log(aluna)
console.log(aluna2)

// REST
// Separamos o nome do restante dos dados do objeto
const {nome, ...restante} = aluna2

console.log(nome)
console.log(restante)
