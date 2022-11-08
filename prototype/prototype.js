
function Pessoas(nome, sobrenome, idade) {
  this.selector = 'li';
  const element = document.querySelectorAll(this.selector);
  this.elementResult = function() {
    element.forEach((list) => {
     console.log(list)
    })
  }
  this.name = nome;
  this.lastName = sobrenome;
  this.age = idade;
  this.completed = function() {
    console.log(`${this.name} ${this.lastName} ${this.age}`);
    console.log(`${element}`)
  }
  
}

const etizel = new Pessoas('Etizel','Azevedo', 27);
const ana = new Pessoas('Ana','Maria', 23);
const fabio = new Pessoas('Fabio','Pamplona', 45);
const luiz = new Pessoas('Luiz','Malfito', 27);