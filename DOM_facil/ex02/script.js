// getElementById pega o elemento por o id

const texto = document.getElementById('meuParagrafo');
const btn = document.getElementById('meuBotao');


btn.addEventListener('click', function(){
    texto.textContent += 'Adicionando texto';
});