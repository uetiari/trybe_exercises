import React from 'react'; // importa o React
import Pokemon from './Pokemon'; // importa o pokémon criado(1º passo)

class Pokedex extends React.Component { // cria o componente da Pokedex com classe
  render(){
    const { pokemons } = this.props; // desestrutura o pokemons do data.js
    return (
      <div className='pokedex'> {/*cria uma div com nome de pokedex onde aparecerá todos os pokemons */} 
        { pokemons.map(monster => <Pokemon key={pokemons.id} pokemon={monster} /> )} {/* Faz um map em todos pokemons e retorna um novo array e para cada monster ele passa as infos que deve ter em cada Pokemon adicionando a id como key */}
      </div>
    );
  }
}

export default Pokedex;

//  Recebe como entrada uma lista de pokemons para serem mostrados na tela. 
// Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.