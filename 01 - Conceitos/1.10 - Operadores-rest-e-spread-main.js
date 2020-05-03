//REST operator
//Basicamente serve para guardar o resto das propriedades

const usuario = {
    nome: 'Diloan',
    idade: 25,
    especializacao: 'Engenharia de Requisitos'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);


const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4))

function soma2(a, b, ...params){
    return params;
}

console.log(soma2(1, 3, 4))

//SPRED
// Basicamente, propaga as informações de algum objeto ou array para outra estrutura de dados.

const arr1 = [1, 2 , 3]
const arr2 = [4, 5 , 6]

// Juntando dois arrays
const arr3 = [...arr1, ...arr2];

console.log(arr3)

const usuario1 = { 
    nome: 'Diloan',
    idade: '25',
    curso: 'Sistemas de informação'
};

//Trocando apenas um atributo do objeto
const usuario2 = {...usuario1, nome: 'Joao'}

console.log(usuario2);