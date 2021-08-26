const greetPeopleNew = (people) => {
  const greeting = [];
  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

const assert = require('assert');
assert.strictEqual(typeof greetPeopleNew, 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const output = greetPeopleNew(parameter);
assert.deepStrictEqual(output, result);

// ------------------------------------

const assert = require('assert');

const removeVowelsNew = (word) => {
  const characters = word.split('');
  const results = [];
  let counter = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      counter += 1;
      results.push(counter);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowelsNew, 'function');
const output = removeVowelsNew(parameter);
assert.strictEqual(output, result);

// ----------------------------------------

const assert = require('assert');

const greaterThanTenNew = (array) => {
  const results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTenNew, 'function');
const output = greaterThanTenNew(parameter);
assert.deepStrictEqual(output, result);

// -----------------------------

const assert = require('assert');

function secondThirdSmallestNew(array) {
    const results = []
    array.sort((item1, item2) => {
        return item1 - item2;
    });
    results.push(array[1], array[2]);
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallestNew, 'function');
const output = secondThirdSmallestNew(parameter);
assert.deepStrictEqual(output, result);