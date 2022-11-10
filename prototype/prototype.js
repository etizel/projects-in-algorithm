
function Pessoas(nome, sobrenome, idade) {

  this.name = nome;
  this.lastName = sobrenome;
  this.age = idade;

  Pessoas.prototype.nomeCompleto = function() {
    return `${this.name} ${this.lastName} ${this.age}`;
  }
  
}

const etizel = new Pessoas('Etizel','Azevedo', 27);
const ana = new Pessoas('Ana','Maria', 23);
const fabio = new Pessoas('Fabio','Pamplona', 45);
const luiz = new Pessoas('Luiz','Malfito', 27);



// prototype Array


const nodeList = document.querySelectorAll('li');
console.log(nodeList);

const listArray = Array.prototype.slice.call(nodeList);
const listArray2 = Array.from(nodeList);