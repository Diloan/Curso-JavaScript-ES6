"use strict";

var usuario = {
  nome: 'Diloan',
  idade: 25,
  endereco: {
    cidade: 'Ananindeua',
    estado: 'PA'
  }
}; //Desestruturação de objetos

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // Desestruturação nos paraemetros

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
