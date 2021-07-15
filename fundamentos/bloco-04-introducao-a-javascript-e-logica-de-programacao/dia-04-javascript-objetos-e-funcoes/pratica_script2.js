let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for (let key in names) {
  console.log('Olá '+ names[key]);
};
//resultado: Olá João; Olá Maria; Olá Jorge

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car){
  console.log(key, car[key]);
};