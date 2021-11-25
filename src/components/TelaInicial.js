import React from 'react'

export default class TelaInicial extends React.Component {

  render() {
    return (

      <div>
        <header>
          <h1>LabeNinjas</h1>
        </header>
        <main>
          <h2>Tela inicial:</h2>
          <button onClick={() => this.props.EscolheTelaCadastro()}>Quero ser um ninja</button>
          <button onClick={() => this.props.EscolheTelaCards()}> Lista de cards</button>
        </main>
        <footer>
          <h2>LabeNinjas</h2>
        </footer>
      </div>
    )
  }
}
