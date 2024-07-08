const url = 'https://www.google.com';
const url2 = 'https://www.youtube.com';
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn-2');


function openInNewTab (url) {
    const aba = window.open(url, '_blank'); // '_blank' eh o atributo q define q sera aberto uma nova aba.
    aba.focus();
}

btn.addEventListener('click',() => {
    openInNewTab(url);


});


function openAnotherTab (url2) {
    const win = window.open(url2, '_blank');
    win.focus();

}

btn2.addEventListener('click',() => {
    openAnotherTab (url2);

});



