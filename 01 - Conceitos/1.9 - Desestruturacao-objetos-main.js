const usuario = {
    nome: 'Diloan',
    idade: 25,
    endereco: {
        cidade: 'Ananindeua',
        estado: 'PA'
    },
};

//Desestruturação de objetos
const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// Desestruturação nos paraemetros
function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);