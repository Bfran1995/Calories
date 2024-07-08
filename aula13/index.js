
// Indice        01234567  
let umaString = "amanha eu vou trabalhar cedo";

console.log(umaString.concat(' em um lindo dia.')); // concatena o valor da variavel + oq esta dentre () by umaString.concat()
console.log(umaString + ' em um lindo dia.'); // junta o valor da string mais oq deseja usando o sinal de +
console.log(`${umaString} em um lindo dia.`); // mais simple e oq eu mais gostei

// descobrindo o indice da palavra dentro da string

console.log(umaString.indexOf('t', 4)); // pedindo o indice da letra U a partir do indice 0
console.log(umaString.lastIndexOf('t', 28)); // procura do ultimo indice para o primeiro

console.log(umaString.length + ' caracteres.'); // retorna o tamanho da string -> quantos caracteres tem


