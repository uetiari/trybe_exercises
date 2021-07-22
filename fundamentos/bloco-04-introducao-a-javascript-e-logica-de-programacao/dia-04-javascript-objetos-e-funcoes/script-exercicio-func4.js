function maiorNome(array) {
  let nome = array[0];
  for (let index in array) {
    if(nome.length < array[index].length) {
      nome = array[index];
    }
  }
  return nome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));