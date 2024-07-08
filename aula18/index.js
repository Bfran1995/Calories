//Objetos

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};

}

const pessoa1 = criaPessoa('Bruno', 'Francisco', 28);
const pessoa2 = criaPessoa('Maria', 'Barbosa', 59);


console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);





