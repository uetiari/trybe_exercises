import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <section className='pokemon'>
        <p> { name } </p>
        <p> { type } </p>
        <p> { averageWeight.value } { averageWeight.measurementUnit }</p>
        <img src={ image } alt={ `$ {name} gif animado` } />
      </section>
    );
  };
};

export default Pokemon;

// precisa ter nome do pokémon
// tipo do pokémon
// peso médio, com unidade de medida
// imagem do pokémon
