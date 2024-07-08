let num1 = prompt('Digite um numero');
let num2 = prompt('Digite outro numero');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let resultado = num1+num2;
alert('O resultado foi ' + resultado);
confirm('Obrigado pela atencao');

/* outra maneira de exibir o resultado, abaixo:

num1 = parseFloat(num1);
num2 = parseFloat(num2);

alert(`O resultado foi: ${num1+num2}`);

// para soma utilizar LET para definir a variavel, CONST nao funciona