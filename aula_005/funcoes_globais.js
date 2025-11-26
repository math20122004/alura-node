// FUNÇÕES GLOBAIS === FUNÇÕES PRONTAS PARA USARMOS

function greeting() {
    console.log('Olá! Seja bem-vindo(a)')
}

setTimeout(greeting, 2000) // Espera para fazer uma ação

let counter = 0

// setInterval sempre retorna seu id para poder ser limpo depois
const id = setInterval( //quase a mesma coisa que o setTimeout, mas fica rodando de tempo em tempo
    () => {
        counter++ 
        console.log(`Contagem em segundos: ${counter}`)
        
        if(counter == 5){
            clearInterval(id) // Para o loop
        }
    }, 1000    
)