//                   0   1   2   3
const arrNumeros = [46, 34, 23, 12];

console.log(arrNumeros[0]); // 46
console.log(arrNumeros[1]); // 34
console.log(arrNumeros[2]); // 23
console.log(arrNumeros[3]); // 12

arrNumeros[1] = 36;
arrNumeros[4] = 100;

console.log(arrNumeros);
//[ 46, 36, 23, 12, 100 ]

delete arrNumeros[4];
console.log(arrNumeros); //NODE ACEITA UM ELEMENTO VÁZIO NA LISTA

// código omitido

function criaArrNum(inicio, fim) {
  const arr = [];
  let elemento = inicio;

  for(let i = 0, j = 0; j < fim; i++, elemento++) {
    arr[i] = elemento;
    j = elemento;
  }
  return arr;
}

arrNumeros.push(67);
console.log(arrNumeros);

arrNumeros.pop();
console.log(arrNumeros);
// [ 12, 23, 34, 45, 56 ]

const elem = arrNumeros.indexOf(12);
console.log(elem);
// 0

const novoArr = arrNumeros.slice(2);
console.log(novoArr);
// [ 34, 45, 56 ]

const arrCalculado = arrNumeros.map((num) => {
  return num * 10;
});

// [ 120, 230, 340, 450, 560 ]
console.log(arrCalculado);


arrNumeros.forEach((num, i) => {
  console.log(`o número ${num} está no índice ${i}`);
});

// o número 12 está no índice 0
// o número 23 está no índice 1
// o número 34 está no índice 2
// o número 45 está no índice 3
// o número 56 está no índice 4

const arrFiltrado = arrNumeros.filter(num => num % 5 === 0);

// [ 45 ]
console.log(arrFiltrado);

// código omitido

const copiaArray = (arr) => {
  const copia = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copia.push(copiaArray(elem)); //Garante que copia um array dentro de um array
    } else {
      copia.push(elem);
    }
  })
  return copia;
}

const arr2 = copiaArray(arr1);

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

const result = cpfs.map((cpf) => {
  if (typeof cpf === 'string') {
    return cpf;
  } else {
    return cpf.toString();
  }
})

console.log(result);

const result2 = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString());
console.log(result2);