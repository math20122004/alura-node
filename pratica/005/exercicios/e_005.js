const dispositivos = [
  { nome: 'Impressora', status: 'ativo' },
  { nome: 'Scanner', status: 'inativo' },
  { nome: 'Projetor', status: 'ativo' }
];

for (const dispositivo of dispositivos) {
  console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}