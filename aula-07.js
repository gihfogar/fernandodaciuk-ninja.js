(function () {
  console.log(`---- AULA 07 ----`)
/*
Crie um array com 5 items (tipos variados).
*/
let gigi1 = [
  "Pizza",
  "Sorvete",
  "Estrogonofe",
  "Frango assado",
  "Frutos Vermelhos",
];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
  gigi1.push(item);
  return gigi1;
}
console.log(addItem("Hamburguer"));

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
function addItens(item3) {
  gigi1.push(item3);
  return gigi1;
}
const item = [{ cachorro: "preto" }, "Número Um", 3];
console.log(addItens(item));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${gigi1[6][1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${gigi1.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${item.length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log(`Números pares entre 10 e 20:`);
let par = 10;
while (par <= 20) {
  if (par % 2 == 0) {
    console.log(par);
  }
  par++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log(`Números ímpares entre 10 e 20: `);
let impar = 10;
while (impar <= 20) {
  if (impar % 2 !== 0) {
    console.log(impar);
  }
  impar++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("Números pares entre 100 e 120:");
for (let par = 100; par <= 120; par++) {
  if (par % 2 == 0) {
    console.log(par);
  }
}

console.log("Números ímpares entre 111 e 125:");
for (let impar = 111; impar <= 125; impar++) {
  if (impar % 2 !== 0) {
    console.log(impar);
  }
}

}) ();