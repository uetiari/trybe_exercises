const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  // Adicione seu código aqui:
  if (name.length === 5) {
    return true;
  }
  return false;
}

console.log(findNameWithFiveLetters('Fernando'));

// forma mais curta
// return names.find((name) => name.length === 5);