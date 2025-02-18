// vamos pegar o elemento ul com id = lista
const lista = document.getElementById('lista');

// vamos pegar o elemento input com id = novoItem
const novoItemLista = document.getElementById('novoItem');

// vamos pegar o elemento button com id = botãoAdicionar
const bntAdicionar = document.getElementById('botaoAdicionar');

// Vamos adicionar um ouvinte de evento do tipo click
bntAdicionar.addEventListener('click', function(){
    // Vamos ler o texto do novo produto a ser adicionado na lista
    const novoItemTetxo = novoItemLista.value;

    if(novoItemTetxo !== ""){
        // Vamos criar um novo elemento li
        const novoItemElemento = document.createElement('li');
        // Vamos adicionar um texto ao novo elemento li
        novoItemElemento.textContent = novoItemTetxo;
        // Vamos adicionar o li com o texto ao elemento
        lista.appendChild(novoItemElemento);
        // Vamos limpar o elemento input
        novoItemInput.value = "";
    }
})