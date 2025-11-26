const ano = 2000

if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)){
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}

const nome = 'Alícia';
const nota = 8;
const falta = 3;

console.log(nome ? `Olá, ${nome}!` : 'Olá!');

const recebeBonus = (nota >= 8) && (falta <= 2) ? 'Recebe Bônus' : 'Não recebe Bônus'

console.log(recebeBonus);

const user = 'premium'

switch(user){
    case 'free':
        console.log('acesso limitado');
        break;
    case 'premium':
        console.log('acesso total ao app');
        break;
    case 'super premium':
        console.log('acesso total ao app e bônus');
        break;
    default:
        console.log('tipo de user desconhecido');
        break;
}
