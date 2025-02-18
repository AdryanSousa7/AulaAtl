//1. Seleciona o elemento com id "container"
const container = document.getElementById('container');

//2. Cria a div interna
const divInterna = document.createElement('div')

//3. Cria o elemento h3 para o nome
const h3Nome = document.createElement('h3');
h3Nome.textContent = 'Nome: ';

//4. Cria o elemento p para o preço
const pPreco = document.createElement('p');
pPreco.textContent = 'Preco: ';

//5. Cria o elemento p para Disponivel
const pDisponivel = document.createElement('p');
pDisponivel.textContent = 'Disponivel: ';

h3Nome.classList.add('paragrafo-estilizado')
pPreco.classList.add('paragrafo-estilizado')
pDisponivel.classList.add('paragrafo-estilizado')

divInterna.appendChild(h3Nome);
divInterna.appendChild(pPreco);
divInterna.appendChild(pDisponivel);

container.appendChild(divInterna);
