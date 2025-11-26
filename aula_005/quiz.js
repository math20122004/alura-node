const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(`
==================================
            BEM-VINDO(A)
==================================\n\n`)

let points = 0
    
reader.question(
    `Qual comando é usado em Python para exibir algo na tela?
        A) echo
        B) print
        C) show
        D) display
        
    > `, (resposta1) => {
            if (resposta1.toUpperCase() === 'B') {
                points++
            }

            reader.question(
            `
Em JavaScript, o que o comando console.log faz?
    A) Cria uma variável
    B) Mostra uma mensagem no console
    C) Faz uma soma
    D) Lê dados do usuário

    > `,    (resposta2) => {
                if (resposta2.toUpperCase() === 'B') {
                    points++
                }

                reader.question(
                `
O que é uma variável em programação?
    A) Um comando de repetição
    B) Um tipo de erro
    C) Um espaço na memória para guardar valores
    D) Um número fixo
    
    > `,            (resposta3) => {
                        if (resposta3.toUpperCase() === 'C') {
                            points++
                        }

                        console.log(`\nSua pontuação final: ${points}/3`)
                        reader.close()
                }
            )
        })
    }
)
