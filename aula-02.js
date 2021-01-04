(function () {
    console.log(`---- AULA 02 ----`)
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum (x, y) {
    return x + y
};
console.log(sum(5, 15))

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var mysum = sum(2, 5) + 5;
console.log(mysum)

// Declare uma nova variável, sem valor.
var newvar = 25;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue () {
    return 'O valor da variável agora é ' + newvar
};
console.log(addValue())

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function gigi (a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        return 'Preencha todos os valores corretamente!'
    }
    return (a * b * c) + 2
};
console.log(gigi(1, 2, 3))

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function melissa (i, l, y) {
    if (i !== undefined && l === undefined && y === undefined) {
        return i
    }
    else if (i !== undefined && l !== undefined && y === undefined) {
        return i + l
    }
    else if (i !== undefined && l !== undefined && y !== undefined) {
        return (i +l) / y
    }
    else if (i === undefined && l === undefined && y === undefined) {
        return false;
    }
    else {
        return null
    }    
};
console.log(melissa(2, 2, 2));

}) ();