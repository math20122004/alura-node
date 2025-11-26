let nota = 8

switch (nota) {
    case 9:
    case 10:
        console.log('Excelente')
        break;
    case 7:
    case 8:
        console.log('Bom')
        break;
    case 4:
    case 5:
    case 6:
        console.log('Médio')
        break;
    case 0:
    case 1:
    case 2:
    case 3:
        console.log('Ruim')
        break;
    default:
        console.log('Nota inválida')
        break;
}

