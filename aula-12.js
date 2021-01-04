(function () {
  console.log(`---- AULA 12 ----`);
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
  let person = {};
  person.name = "Gigi";
  person.lastname = "Fogar";
  person.age = 27;

  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
  console.log(Object.keys(person));

  /*
Crie um array vazio chamado `books`.
*/
  let books = [];

  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  books.push({ name: "Galileu Galilei", pages: 175 });
  books.push({ name: "Strauss", pages: 100 });
  books.push({ name: "Singonium", pages: 200 });

  /*
Mostre no console todos os livros.
*/
  console.log("Lista de livros:", books);

  /*
Remova o último livro, e mostre-o no console.
*/
  let removeBook = books.pop();
  console.log("Livro que está sendo removido:", removeBook);

  /*
Mostre no console os livros restantes.
*/
  console.log("Agora sobraram somente os livros:", books);

  /*
Converta os objetos que ficaram em `books` para strings.
*/
  JSON.stringify(books);

  /*
Mostre os livros nesse formato no console:
*/
  let booksStr = JSON.stringify(books);
  console.log("Livros em formato string: ", booksStr);

  /*
Converta os livros novamente para objeto.
*/
  console.log("Agora os livros são objetos novamente: ", JSON.parse(booksStr));

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
  for (let prop in books) {
    console.log(prop, books[prop]);
  }
  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  myName = ["G", "E", "O", "V", "A", "N", "A"];
  console.log("Meu nome é: ", myName.join());

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  console.log("Meu nome é: ", myName.join(""));

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  console.log("Meu nome invertido é:", myName.reverse());

  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  console.log("Agora em ordem alfabética:", myName.sort());
})();
