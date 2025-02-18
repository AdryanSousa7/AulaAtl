//1. Seleciona o elemento com id "container"
const container = document.getElementById('container');

//2. Cria a div interna
const divInterna = document.createElement('div')

//3. Cria o elemento h3 para o nome
const h3EscolaSenai = document.createElement('h3');
h3EscolaSenai.textContent = 'Escola SENAI ';

//4. Cria o elemento p para o preço
const pSuicoBrasileiro = document.createElement('p');
pSuicoBrasileiro.textContent = 'Suiço Brasileiro ';

//5. Cria o elemento p para Disponivel
const pEscola = document.createElement('p');
pEscola.textContent = 'Escola SENAI Suiço Brasileiroa ';

h3EscolaSenai.classList.add('paragrafo-estilizado')
pSuicoBrasileiro.classList.add('paragrafo-estilizado')
pEscola.classList.add('paragrafo-estilizado')

divInterna.appendChild(h3EscolaSenai);
divInterna.appendChild(pSuicoBrasileiro);
divInterna.appendChild(pEscola);

container.appendChild(divInterna);
