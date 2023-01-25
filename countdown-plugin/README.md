A classe "CountDown" é uma classe JavaScript que permite calcular a diferença entre uma data futura e a data atual. Ela é composta por vários métodos que retornam diferentes unidades de tempo, como dias, horas, minutos e segundos.

No construtor, é esperado um argumento "futureDate" que representa a data futura em relação à qual será feito o cálculo. Esse argumento é armazenado na propriedade "futureDate" da classe.

Os métodos "\_actualDate" e "\_futureDate" retornam, respectivamente, a data atual e a data futura, ambas no formato Date. O método "\_timeStampDiff" retorna a diferença entre as duas datas em milissegundos.

Os métodos "days", "hours", "minutes" e "seconds" utilizam o valor retornado pelo método "\_timeStampDiff" e calculam a quantidade de dias, horas, minutos e segundos, respectivamente, entre as duas datas.

Por fim, o método "totally" retorna um objeto com as unidades de tempo calculadas pelos métodos anteriores, com dias, horas, minutos e segundos.

```
<script type="module" src="./script.js"></script>

```
