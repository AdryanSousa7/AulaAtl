// Vamos pegar o elemento button com id = alternarBotao
const alternarBtn = document.getElementById('alterarBotao');
// Vamos pegar o elemento div com id = mensagem
const msg = document.getElementById('mensagem');

// Vamos adicionar o ouvinte para o evento click do elemento button
alternarBtn.addEventListener('click', function(){
    // Vamos verificar se a mensagem está oculta
    if(msg.classList.contains('oculto')){
        // vamos remover a classe  oculta para exibir a mensagem
        msg.classList.remove('oculto');
    }else {
        // vamos adicionar o estilo oculto para ocultar a frase
        msg.classList.add('oculto');
    }
});