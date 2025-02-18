//1. Seleciona o elemento com id "conteiner"
const container = document.getElementById('conteiner'); 

//2. Criar a div interna - dentro da div id='conteiner'
const divInterna = document.createElement('div');

//3. Criar dois elementos p com seus respectivos texto
const paragrafo1 = document.createElement('p');
paragrafo1.textContent = 'Este é o primeiro paragrafo!';

// const quebra = document.createElemento('br');

const paragrafo2 = document.createElement('p');
paragrafo2.textContent = 'Este é o primeiro paragrafo!';

//4. Adiciona a classe CSS aos parágrafos - método classList()
paragrafo1.classList.add('paragrafo-estilizado');
paragrafo2.classList.add('paragrafo-estilizado');

//4. Adicione os elementos à div inteira - 'div'
divInterna.appendChild(paragrafo1);
// divInterna.appendChild(quebra);

divInterna.appendChild(paragrafo2);

//6. Adiciona a div id='conteiner'
container.appendChild(divInterna);