
let sexo = prompt('Digite seu sexo - masculino ou feminino');
let idade = prompt('Digite sua idade');
let peso = prompt('Digite seu peso em KG');
let altura = prompt('Digite sua altura em cm');

if (sexo === 'masculino') {
    let contaMasc = 66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade);
    alert(`voce deve consumir ${contaMasc} calorias por dia.`);
   
} 

else if (sexo === 'feminino') {

    let contaFemi = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    alert(`voce deve consumir ${contaFemi} calorias por dia.`);
} 



