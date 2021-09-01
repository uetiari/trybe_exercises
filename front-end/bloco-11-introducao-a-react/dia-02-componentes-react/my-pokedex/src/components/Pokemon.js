import React from 'react'; // importa o React

class Pokemon extends React.Component { // cria um componente com classe 
  render() { // o que irá mostrar
    const { pokemon: { name, type, averageWeight, image } } = this.props; // desestrutura o obj de apenas um pokemon
    return (
      <section className='pokemon'> {/* cria uma section com classname pokemon*/}
        <p> { name } </p> {/* adiciona um parágrafo com o nome vindo do pokemon da const*/}
        <p> { type } </p> {/* adiciona um parágrafo com o tipo vindo do pokemon da const*/}
        <p> { averageWeight.value } { averageWeight.measurementUnit }</p> {/* adiciona um parágrafo com as info de peso vindo do pokemon da const*/}
        <img src={ image } alt={ `${name} gif animado` } /> {/* adiciona uma imagem vindo do pokemon da const e um alt com nome usando template Strings*/}
      </section>
    );
  };
};

export default Pokemon;

// precisa ter nome do pokémon
// tipo do pokémon
// peso médio, com unidade de medida
// imagem do pokémon
