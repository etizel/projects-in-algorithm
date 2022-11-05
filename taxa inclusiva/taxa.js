
function Carros(mark, price) {
  const marca = mark;
  const preco = price;
  const taxa = 3;
  const precoFinal = preco * taxa;
  
  console.log(marca, preco, precoFinal)
 
};

const honda = new Carros('Honda', 3000);
const ferrari = new Carros('Ferrari', 70000);
const lamborghine = new Carros('Lamborghine', 77000);