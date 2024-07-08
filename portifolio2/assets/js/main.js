const form = document.querySelector('#selecao');
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputNome = document.querySelector('#nome');

    const identificacao = inputNome.value;

    console.log(identificacao);

});




function criaP() {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;
    resultado.appendChild(p);
}













