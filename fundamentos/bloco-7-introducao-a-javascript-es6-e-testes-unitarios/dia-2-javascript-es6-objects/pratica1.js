const person = {
  name: 'Ariane',
  lastName: 'Ueti'
};

console.log(person);
let newKey = 'pet';
const pet = 'Kika';
person[newKey] = pet;

console.log(`${person.name} ${person.lastName} é tutora da ${person.pet}, uma vira-lata caramelo.`)
// ----------------------------------------
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// -----------------------------------------
const customer = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};

// -----------------------------------------
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

// -----------------------------------------
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);