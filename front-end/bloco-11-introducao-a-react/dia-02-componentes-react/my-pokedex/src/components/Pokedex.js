import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render(){
    const { pokemons } = this.props;
    return (
      <div className='pokedex'>
        { pokemons.map(pokemon => <Pokemon key={pokemons.id} pokemon={pokemon} /> )}
      </div>
    );
  }
}

export default Pokedex;

//  Recebe como entrada uma lista de pokemons para serem mostrados na tela. 
// Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.