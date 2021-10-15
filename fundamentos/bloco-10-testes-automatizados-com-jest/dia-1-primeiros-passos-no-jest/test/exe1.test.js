// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('../src/exe1');

describe('Requisito 1', () => {
  test('Verifica se a função Sum existe', () => {
    expect(typeof sum).toBe('function');
  })
  test('Retorna a soma do a + b', () => {
    expect(sum(1,2)).toBe(3);
  })
  test('Retorna a soma de 4+5 seja 9', () => {
    expect(sum(4,5)).toBe(9);
  })
  test('Retorna a soma de 0+0 seja 0', () => {
    expect(sum(0,0)).toBe(0);
  })
  test('Verifica se a função mostra Erro quando recebe um string', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow();
  })
  test('Se mostra erro "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(/parameters must be numbers/)
  })
});
