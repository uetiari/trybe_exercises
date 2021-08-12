// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
    // conosole.log(data.joke);
};

window.onload = () => fetchJoke();

// Exercício 2 até 5
const personalPromise = () => {
  const myPromise = new Promise((resolve, reject) => { // isso que é instanciar uma Promise
    const numbers = Array.from( // substitui o for convencional
      { length: 10 }, // tamanho do array que vai criar
      () => Math.floor(Math.random() * 50) + 1, // números randômicos de 1 à 50 
    );

    // fazendo tds números do array serem elevados ao quadrado
    const soma = numbers.map(number => number * number)
    // somar todos onde acc será a soma, e curr será o número
    .reduce((acc, curr) => acc + curr, 0);
    //faz a verificação para resolver ou rejeitar, pode add soma nos param dos dois
    soma < 8000 ? resolve(soma) : reject();
  });
  myPromise
  .then((soma) => [2, 3, 5, 10].map(number => soma / number))
  // myPromise.then(() => console.log('Promise Resolvida :)'))
  .catch((soma) => console.log(`Promise Rejeitada ${soma} :(`))
    // .catch(() => console.log('Promise Rejeitada :('));
}

personalPromise();