//Modo um
/*class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.addTodo();
}
*/

// Estendendo classe

/*class List{
    constructor(){
        this.data = [];
    }


    add(data) {
        this.data.push(data);
        console.log(this.data);
    }

}

class TodoList extends List{ 
    constructor(){
        super() //Chamando o constructor da classe pai

        this.usuario =  'Diloan';
    }
    
    mostraUsuaario(){
        console.log(this.usuario);
    }
}


var MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuaario();
*/

//Como meétodo estático, dá erro
/*class TodoList{
    constructor(){
        this.todos = [];
    }

    static addTodo(){ // Metodo estatico não enxerga o restante da classe, passa algo para ele e ele retorna algo que não tem a ver com a classe
        this.todos.push('Novo todo');
        console.log(this.console);
    }
}

TodoList.addTodo();
*/

class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));