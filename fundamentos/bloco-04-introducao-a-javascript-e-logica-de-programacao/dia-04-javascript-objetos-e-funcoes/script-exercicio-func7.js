function confereString(word, ending) {
  let reverseWord = word.split('').reverse().join('');
  let reverseEnding = ending.split('').reverse().join('');
  let compara;

  for (let index = 0; index < reverseEnding.length; index += 1) {
    if (reverseWord[index] !== reverseEnding[index]) {
      compara = false;
    } else {
      compara = true;
    }
  }
  return compara;
}

console.log(confereString('trybe', 'be'));
console.log(confereString('joaofernando', 'fernan'));