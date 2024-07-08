/*
Luis Otavio tem 30 anos, pesa 84KG 
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luis Otavio nasceu em 1980
*/
// quando separado por virgulas o JS coloca um espaco automatico


const nome = 'Bruno';
const sobrenome = 'Francisco';
const idade = 28;
const peso = 100;
const altura = 1.83;
let imc =  peso / (altura * altura);
let anoNascimento = 1995;


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'KG.'); 
console.log('tem', altura, 'de altura e seu IMC é de', imc)
console.log(nome, sobrenome, 'nasceu em', anoNascimento);