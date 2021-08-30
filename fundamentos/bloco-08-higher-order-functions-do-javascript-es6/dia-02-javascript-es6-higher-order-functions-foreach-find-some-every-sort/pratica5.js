const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name); // se o currentName for estritamente igual ao name
}

console.log(hasName(names, 'Ana'));
