function indiceMenor(array) {
  let indice = 0;
  for (let index in array) {
    if(array[indice] > array[index]) {
      indice = index;
    }
  }
  return indice;
}

console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));