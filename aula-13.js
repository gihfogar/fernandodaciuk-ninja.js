(function () {
  console.log("---- AULA 13 ----");

  /*
Envolva todo o código desse desafio em uma IIFE.
*/

  /*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
  let newArr = [10, 9, 8, 7];
  console.log("O array em formato de string é:", newArr.toString());

  /*
Crie 2 arrays `sul` e `sudoeste`, que serão as regiões de Portugal.
Cada array deve conter os estados dessa região.
*/
  let sul = ["Faro", "Portimão"];
  let sudoeste = ["Costa Vicentina", "Alentejo"];

  /*
Crie uma variável chamada `portugal`, que irá receber as duas regiões
concatenadas. Mostre o `Portugal` no console.
*/
  let portugal = sul.concat(sudoeste);
  console.log("Algumas regiões de Portugal:", portugal);

  /*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
  portugal.unshift("Serra da Estrela", "Porto", "Braga");
  console.log("Mais estados adicionados:", portugal);

  /*
Remova o primeiro estado do array `portugal` e mostre-o no console.
*/
  console.log("Estado removido:", portugal.shift());

  /*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `portugal`. Não remova esses itens de `portugal`.
*/
  newSul = portugal;

  /*
Mostre no console os estados que estão em `newSul`.
*/
  console.log("Estados do Sul de Portugal:", newSul.slice(2, 4));

  /*
Mostre no console todos os estados que estão em `portugal`.
*/
  console.log("Alguns Estados de Portugal:", portugal);

  /*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
  nordeste = ["Trás dos Montes", "Alto Douro"];

  /*
Mostre no console os estados do nordeste.
*/
  console.log("Estados do Nordeste:", nordeste);

  /*
Remova de `portugal` os estados do `sudoeste`, colocando-os em uma variável
chamada `newSudoeste`.
*/
  newSudoeste = portugal.splice(4);

  /*
Adicione os estados do `nordeste` ao array `portugal`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
  portugal.splice(4, 6, "Trás dos Montes", "Alto Douro");

  /*
Mostre no console os estados em `newSudoeste`.
*/
  console.log("Estados em newSudoeste:", newSudoeste);

  /*
Mostre no console os estados de `portugal`.
*/
  console.log("Alguns estados de Portugal:", portugal);

  /*
usando forEach, percorra o array `portugal` e gere um novo array chamado
`newPortugal`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `portugal`,
- `estado`: que será o estado do array `portugal`.
*/
  let newPortugal = [];
  portugal.forEach(function (item, index) {
    newPortugal.push({ estado: item, id: index });
  });

  /*
Mostre o array `newPortugal` no console
*/
  console.log("newPortugal:", newPortugal);

  /*
Percorra o array `portugal` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
  let letters = portugal.every(function (item) {
    return item.length < 7;
  });

  console.log(
    "Todos os estados de `portugal` tem mais de 7 letras?",
    letters
      ? "Sim, todos os estados tem mais de 7 letras!"
      : "Nem todos os estados tem mais de 7 letras!"
  );

  /*
Percorra o array `portugal` e verifique se o Faro está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Faro está incluído!"
Senão, mostrar a frase:
- "Faro não foi incluído :("
*/
  let faroCity = portugal.some(function (item) {
    return item;
  });
  console.log(
    "Faro está incluído em `portugal`?",
    faroCity ? "Faro está incluído!" : "Faro não foi incluído :("
  );

  /*
Percorra o array `newPortugal` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence a Portugal."
Atribua o novo array a uma variável chamada `map`.
*/
  let states = newPortugal.map(function (item) {
    item.id++;
    return item;
  });

  /*
Mostre no console o array criado acima:
*/
  console.log(
    "newPortugal agora com mais informações:",
    states,
    "pertence a Portugal."
  );

  /*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
  let filter = states.filter(function (item) {
    return item.id % 2 === 0;
  });

  /*
Mostre o array filtrado acima no console.
*/
  console.log("Estados com ID par:", filter);
})();
