import './App.css'; // importa o estilo
import React from 'react'; // importa o react
import data from './data'; // importa o data.js
import Pokedex from './components/Pokedex'; // importa o componente da Pokedex (2º passo) (Último passo App.js)

function App() { // faz uma função do App
  return (
    <main className='App'> {/*retorna uma main com classe App*/}
      <h1> My Pokedex </h1> {/*Adiciona um título*/}
      <Pokedex pokemons={data} /> {/*mostra o component Pokedex passando de info o data.js*/}
    </main>
  );
}

export default App;