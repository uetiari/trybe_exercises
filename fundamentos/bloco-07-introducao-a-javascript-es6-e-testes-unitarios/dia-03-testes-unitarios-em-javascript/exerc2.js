// 1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// 3. Verifique se o array passado por parâmetro não sofreu alterações
// 4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const newArray = [5, 6, 7, 8];
myRemove(newArray, 5);
assert.deepStrictEqual(newArray, [5, 6, 7, 8]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);