
// TEMPLATE STRING
// COLOCAR -> ${} PARA IDENTIFICAR A VARIAVEL SEM PRECISAR SEPARAR POR VIRGULAS TODO O VALOR A SER DECLARADO FICA DENTRE CRASES ``

const nome = 'Bruno';
const sobrenome = 'Francisco';
const idade = 28;
const peso = 100;
const altura = 1.83;
let imc =  peso / (altura * altura);
let anoNascimento = 1995;


console.log(`${nome} ${sobrenome} tem ${idade} anos pesa, ${peso} KG.`); 
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);