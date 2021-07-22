function palindromo(string) {
  let verific = string.split('').reverse().join('');
  if (verific === string) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));