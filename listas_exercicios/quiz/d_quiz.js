const readline = require('readline');

function askQuestion(question, answer) {
    return new Promise((resolve) => {
        const reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        reader.question(question, (r1) => {
            const result = r1.toLowerCase() === answer.toLowerCase();
            reader.close();
            resolve(result);
        });
    });
}

module.exports = { askQuestion };
