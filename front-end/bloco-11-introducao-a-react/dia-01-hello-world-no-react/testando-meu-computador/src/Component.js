import React from "react";
// import React, { Component } from 'react'; -> forma de importar usando Destructuring

class Component extends React.Component {
  render() {
    return (
      <div>
        <h1> Ariane Ueti</h1>
        {/* não pode usar class nesse html */}
        <p>Estudante de Desenvolvimento Web pela Trybe ;-) </p>
      </div>
    );
  }
}

export default Component;
