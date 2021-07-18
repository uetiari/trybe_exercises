function repete(numbers) {
  let maisRepete = {};
  for (let index =0; index < numbers.length; index += 1) {
    let value = numbers[index];
    if(maisRepete[value] === undefined) {
      maisRepete[value] = 1;
    } else {
      maisRepete[value]++
    }
  }

  let repetido = 0;
  let number = 0;

  for (let prop in maisRepete) {
    if (repetido < maisRepete[prop]) {
      repetido = maisRepete[prop];
      number = prop;
    }
  }

  return number;
}

console.log(repete([2, 3, 2, 5, 8, 2, 3]));