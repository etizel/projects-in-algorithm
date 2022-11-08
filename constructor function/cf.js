function Pessoa(name, age) {
  this.nome = name;
  this.idade = age;
  this.selector = 'li'
  this.element = document.querySelectorAll(this.selector)
  this.active = function() {
    this.element.forEach((actX) => {
      actX.classList.add('active');
    });
  }

  this.remove = function() {
    this.element.forEach((remY) => {
      remY.classList.remove('active');
    })
  }

};

const joao = new Pessoa('João', 23);
joao.active();

const maria = new Pessoa('Maria', 15);
maria.active();
const bruno = new Pessoa('Bruno', 27);
bruno.active();
