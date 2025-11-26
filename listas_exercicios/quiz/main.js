const { askQuestion } = require('./d_quiz');

(async () => {
    const acertou = await askQuestion('Qual a capital do Brasil? ', 'Brasília');
    console.log(acertou)
    console.log(acertou ? '✅ Acertou!' : '❌ Errou!');
})();
