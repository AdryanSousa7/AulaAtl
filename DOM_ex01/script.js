// vamos pegar o elemento do texto h1
const elementoTitulo = document.getElementById('titulo');

// vamos pegar o elemento button
const elementoBotao = document.getElementById('botao');

// agora vamos adicionar um manipulador de eventos JS
elementoBotao.addEventListener('click', function(){
    // vamos mudar o texto do elemento h1 = elementoTitulo
    elementoTitulo.textContent = 'Texto Alterado';
});