function somaNum(number) {
  let soma = 0;
  for (let index = 1; index <= number; index += 1){
    soma = soma + index;
  }
  return soma;
}

console.log(somaNum(5));

