// Parte 1
// 1. Teste se o retorno de sum(4, 5) é 9
// 2. Teste se o retorno de sum(0, 0) é 0
// 3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// 4. Teste se a mensagem de erro é "parameters must be numbers" quando // realizar a chamada sum(4, "5")

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expected = sum(4, 5);
assert.strictEqual(expected, '9', 'O valor esperado deveria ser numérico');