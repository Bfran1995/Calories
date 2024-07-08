// capturar evento de submit do formulario
const form = document.querySelector('#formulario'); /* O QuerySelector é uma poderosa ferramenta que permite selecionar elementos no DOM (Document Object Model) de uma página web*/

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }                                   /* dentro de funcoes se usar o comando RETURN nada depois disso sera executado*/

    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`
setResultado (msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
        'Obesidade grau 3'];


    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <= 18.5) return nivel[0];
}
/* por usar o return nao preciso usar o if else, pois os outros blocos nem serao executados,
pelo fato do if ser pequeno nao precisa de bloco com chaves -> {} */

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP() {

    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p;

}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);   /* innerHTML define ou obtém a sintaxe HTML ou XML descrevendo 
    os elementos descendentes */
    
}



