let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numMaior = 0;
for (let index = 0; index < numbers.length; index += 1 ){
  if (numMaior < numbers[index]){
    numMaior = numbers[index];
  }
}
console.log(numMaior)