const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  if (number % 3 === 0 && number % 5 === 0) {
    return true;
  }
  return false;
}

const isDivisible = numbers.find(findDivisibleBy3And5);

console.log(findDivisibleBy3And5(11));

// forma mais curta
//return numbers.find((number) => number % 3 === 0 && number % 5 === 0);