(function () {
  console.log(`---- AULA 04 ----`)
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe um único parâmetro como argumento. Essa função deve retornar `true` se o equivalente booleano para o valor passado no argumento for `true`, ou `false` para o contrário.
*/

var isTruthy = function (param) {
  return !!param;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy("");
isTruthy(0);
isTruthy(-0);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 5 valores `truthy`.
*/
isTruthy(1);
isTruthy("Gigi");
isTruthy({});
isTruthy([]);
isTruthy(function () {});

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
  marca: "Volkswagen",
  modelo: "Polo",
  placa: "17-QB-02",
  ano: 2015,
  cor: "cinza escuro",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};
console.log(carro);

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (cor) {
  this.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function (modelo) {
  return this.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function (marca) {
  return this.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
  return `Esse carro é um ` + this.obterMarca() + " " + this.obterModelo();
};
console.log(carro.obterMarcaModelo());

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse número não precisa encher o carro, você poderá acrescentar as pessoas aos poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por parâmetro for ultrapassar o limite de assentos do carro, então você deve mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function (numeroPessoas) {
  var totalPessoas = carro.quantidadePessoas + numeroPessoas;
  if (carro.quantidadePessoas === carro.assentos) {
    return "O carro já está lotado!";
  }

  if (totalPessoas > carro.assentos) {
    var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    var PluralOuSingular = quantasPessoasCabem === 1 ? " pessoa" : " pessoas";
    return "Só cabem mais " + quantasPessoasCabem + PluralOuSingular + "!";
  }

  carro.quantidadePessoas += numeroPessoas;
  return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
};

console.log(carro.adicionarPessoas(0));

}) ();