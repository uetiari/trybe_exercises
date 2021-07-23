const person = {
  name: 'Ariane',
  lastName: 'Ueti'
};

console.log(person);
let newKey = 'pet';
const pet = 'Kika';
person[newKey] = pet;

console.log(`${person.name} ${person.lastName} é tutora da ${person.pet}, uma vira-lata caramelo.`)