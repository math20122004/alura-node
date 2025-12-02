const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let catalog = [];

function adicionarProduto() {
    leitor.question('Digite o nome de um produto.\n> ', (nProduct) => {
        leitor.question('Digite o preço do produto.\n> ', (pProduct) => {
            leitor.question('Esse produto está disponível (N/S).\n> ', (dProduct) => {

                catalog.push({
                    name: nProduct,
                    price: Number(pProduct),
                    available: dProduct.toLowerCase() === 's'
                });

                leitor.question('Deseja adicionar mais um produto? (N/S)\n> ', (addProduct) => {
                    if (addProduct.toLowerCase() === 'n') {
                        console.log("\nCatálogo final:");
                        console.log(catalog);
                        leitor.close();
                    } else {
                        adicionarProduto(); // chama novamente
                    }
                });
            });
        });
    });
}

adicionarProduto();
