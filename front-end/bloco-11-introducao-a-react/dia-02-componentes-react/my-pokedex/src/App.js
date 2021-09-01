import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <main className="App">
      <Pokedex pokemons={pokemons} />
    </main>
  );
}

export default App;