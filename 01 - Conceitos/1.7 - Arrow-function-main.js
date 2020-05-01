const arr = [1, 3, 4, 5, 6];

//Percorre o array e pode fazer uma operação para cada item
//const newArray = arr.map(function(item){  
//    return item * 2;
//});

const newArray = arr.map(item => item * 2);

console.log(newArray);

const teste = () => ({nome: 'Diloan'});

console.log(teste());
