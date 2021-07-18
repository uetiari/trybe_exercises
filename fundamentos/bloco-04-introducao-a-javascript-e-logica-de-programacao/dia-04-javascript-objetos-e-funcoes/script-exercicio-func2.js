function indiceMaior(array) {
  let indice = 0;
  for (let index in array) {
    if(array[indice] < array[index]) {
      indice = index;
    }
  }
  return indice;
}

console.log(indiceMaior([2, 3, 6, 7, 10, 1]));