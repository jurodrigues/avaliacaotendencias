document.write('<h1>Avaliacao Final</h1>');

tabela = document.createElement('table');
trh = document.createElement('tr');
th = document.createElement('th');

formulario = document.createElement('form');

nome = document.createElement('input');
nome.setAttribute('placeholder', 'Informe seu nome');
idade = document.createElement('input');
idade.setAttribute('placeholder', 'Informe sua idade');

cor = document.createElement('select');
cor.options[1] = new Option("Branco", "value");
cor.options[2] = new Option("Preto", "value");
cor.options[3] = new Option("Azul", "value");
cor.options[4] = new Option("Amarelo", "value");
cor.options[5] = new Option("Vermelho", "value");
cor.options[6] = new Option("Rosa", "value");
cor.options[7]= new Option("Verde", "value");


sexo = document.createElement('select');
sexo.setAttribute('placeholder', 'Sexo');
sexo.options[1] = new Option("Masc", "value");
sexo.options[2] = new Option("Fem", "value");


botaoSalvar = document.createElement('button');
botaoSalvar.innerText = 'Salvar';

div = document.createElement('div');
div.setAttribute('style', 'width:100px;');

formulario.appendChild(nome);
formulario.appendChild(idade);
formulario.appendChild(sexo);
formulario.appendChild(cor);
formulario.appendChild(botaoSalvar);

div.appendChild(formulario);

document.body.appendChild(div);


