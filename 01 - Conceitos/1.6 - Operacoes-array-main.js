const arr = [1, 3, 4, 5, 8, 10];

//Percorre o array e pode fazer uma operação para cada item
const newArray = arr.map(function(item, index){  
    return item * index;
});

console.log(newArray);

// Guarda a soma da operação anterior para a proxima iteração, neste exemplo
const sum = arr.reduce(function(total, proximo){
    return total + proximo;
});

console.log(sum);

// Faz um filtro no array retirando algo, talvez, precisa retornar true ou false a condição
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

// Percorre o array em busca de um item e o retorna, retorna undefided se não achar
const find =  arr.find(function(item){
    return item === 4;
});

console.log(find);