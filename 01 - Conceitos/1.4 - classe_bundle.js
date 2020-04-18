"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
