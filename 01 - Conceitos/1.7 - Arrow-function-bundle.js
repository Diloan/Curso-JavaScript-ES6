"use strict";

var arr = [1, 3, 4, 5, 6]; //Percorre o array e pode fazer uma operação para cada item
//const newArray = arr.map(function(item){  
//    return item * 2;
//});

var newArray = arr.map(function (item) {
  return item * 2;
});
console.log(newArray);

var teste = function teste() {
  return {
    nome: 'Diloan'
  };
};

console.log(teste());
