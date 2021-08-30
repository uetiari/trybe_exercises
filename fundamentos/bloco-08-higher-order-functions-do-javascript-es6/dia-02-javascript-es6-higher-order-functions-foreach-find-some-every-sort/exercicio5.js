const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => (
    book.author.birthYear > 1900 && book.author.birthYear <= 2000
  ));
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
