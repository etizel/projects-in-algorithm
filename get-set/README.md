# Get e set

são métodos especiais em JavaScript que permitem acessar e modificar propriedades de um objeto de forma controlada. Eles são usados para definir a lógica de como os valores das propriedades devem ser obtidos e definidos, e podem ser usados para validação de dados, cálculo de valores ou outras tarefas personalizadas.

Exemplo de uso de get e set:

```

class Pessoa {
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }

  get nome() {
    return this._nome;
  }

  set nome(valor) {
    this._nome = valor;
  }

  get idade() {
    return this._idade;
  }

  set idade(valor) {
    if (valor < 0 || valor > 150) {
      throw new Error("Idade inválida");
    }
    this._idade = valor;
  }
}

const pessoa1 = new Pessoa("João", 25);
console.log(pessoa1.nome); // "João"
pessoa1.nome = "Maria";
console.log(pessoa1.nome); // "Maria"
console.log(pessoa1.idade); // 25
pessoa1.idade = -5; // gera um erro "Idade inválida"

```

Neste exemplo, as propriedades "nome" e "idade" são privadas (prefixadas com "\_") e só podem ser acessadas e modificadas através dos métodos get e set. O método set "idade" valida se o valor passado é válido antes de definir a propriedade.

Getters e setters são muito úteis para garantir a integridade dos dados de um objeto, além de prover uma forma mais segura e controlada de acessar e modificar os valores de uma propriedade.

É importante notar que getters e setters são suportados a partir do ECMAScript 5, então caso você esteja trabalhando com versões anteriores, essa feature não estará disponível.
