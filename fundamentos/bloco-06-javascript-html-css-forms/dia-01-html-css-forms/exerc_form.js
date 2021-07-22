function statesAll() {
  let states = document.getElementById('state');
  let statesAll = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < statesAll.length; index += 1) {
    let newOption = document.createElement('option');
    states.appendChild(newOption).innerText = statesAll[index];
    states.appendChild(newOption).value = statesAll[index];
  }
}

statesAll();