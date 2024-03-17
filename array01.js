
// Método slice
//Retorna uma cópia de parte do array, selecionada do índice 1 (inclusive) ao índice 4 (exclusive)
let novoArray = array.slice('1', '4');
console.log(novoArray); // Saída: ['1', '2', '3']

// Método slice
//Retorna uma cópia de parte do array, selecionada do índice 1 (inclusive) ao índice 4 (exclusive)
let novoArray = array.slice('1', '5');
console.log(novoArray); // Saída: ['1'', '2', '3', '4']

// Método concat
//Retorna um novo array que é a concatenação do array 'array1' com o array 'array2'
let array1 = ['1', '2', '3'];
let array2 = ['4', '5', '6'];
let arrayConcatenado = array1.concat(array2);
console.log(arrayConcatenado); // Saída: ['1', '2', '3', '4', '5', '6']

// Método concat
//Retorna um novo array que é a concatenação do array 'array1' com o array 'array2'
let array1 = ['10', '20', '30'];
let array2 = ['40', '50', '60'];
let arrayConcatenado = array1.concat(array2);
console.log(arrayConcatenado); // Saída: ['10', '20', '30', '40', '50', '60']

// Método includes
// Verifica se um array inclui um determinado elemento e retorna verdadeira ou falsa.
let estaIncluido = array.includes('3');
console.log(estaIncluido); // Saída: verdadeira


// Método includes
// Verifica se um array inclui um determinado elemento e retorna verdadeira ou falsa.
let estaIncluido = array.includes('6');
console.log(estaIncluido); // Saída: verdadeira

// Método reverse
// Inverte a ordem dos elementos do array e retorna o próprio array invertido.
let array = ['1', '2', '3', '4', '5'];
let arrayInvertido = array.reverse();
console.log(arrayInvertido); // Saída: ['5', '4', '3', '2', '1'];

// Método reverse
// Inverte a ordem dos elementos do array e retorna o próprio array invertido.
let array = ['5', '4', '3', '2', '1'];
let arrayInvertido = array.reverse();
console.log(arrayInvertido); // Saída:  ['1', '2', '3', '4', '5'];

// Método filter
// Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
let arrayFiltrado = array.filter(elemento => elemento % 2 === 0);
console.log(arrayFiltrado); // Saída: ['2', '4'];

// Método filter
// Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
let arrayFiltrado = array.filter(elemento => elemento % 2 === 0);
console.log(arrayFiltrado); // Saída: ['4', '8'];

// Método map
// Cria um novo array com os resultados da função fornecida sendo aplicada a cada elemento do array original.
let arrayMapeado = array.map(elemento => elemento * 2);
console.log(arrayMapeado); // Saída: ['4', '6', '8', '10', '12']

// Método map
// Cria um novo array com os resultados da função fornecida sendo aplicada a cada elemento do array original.
let arrayMapeado = array.map(elemento => elemento * 2);
console.log(arrayMapeado); // Saída: ['2', '4', '6', '8', '10']

// Método find
// Retorna o primeiro elemento do array que satisfaz a função de teste fornecida.
let elementoEncontrado = array.find(elemento => elemento > 3);
console.log(elementoEncontrado); // Saída: 4

// Método find
// Retorna o primeiro elemento do array que satisfaz a função de teste fornecida.
let elementoEncontrado = array.find(elemento => elemento > 4);
console.log(elementoEncontrado); // Saída: 5

// Método lastIndexOf
// Explicação: Retorna o índice do último elemento encontrado no array que corresponde ao valor especificado.
let ultimoIndice = array.lastIndexOf(3);
console.log(ultimoIndice); // Saída: 2

// Método lastIndexOf
// Explicação: Retorna o índice do último elemento encontrado no array que corresponde ao valor especificado.
let ultimoIndice = array.lastIndexOf(4);
console.log(ultimoIndice); // Saída: 2




