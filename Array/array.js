const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidasSplice = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
const comidasPop = comidas.pop();
// Adicione 'Arroz' ao final da array
const arrozPush = comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
const foodUnshift = comidas.unshift('Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));
