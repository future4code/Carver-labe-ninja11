import Axios from 'axios'
import React from 'react'

export default class TelaDetalhes extends React.Component {

 
  render() {

    return (
      <div>
          <button onClick={()=> this.props.EscolheTelaInicial()}>home</button>
        <h2>Tela de Cards:</h2>
        <p>{this.props.detalhes.title}</p>
        <p>{this.props.detalhes.description}</p>
        <p>R${this.props.detalhes.price},00</p>
        <p>{this.props.detalhes.paymentMethods}</p>

        {/* <button onClick={this.BuscarJobs}>buscar</button> */}
        {/* {meusJobs} */}
        <hr/>
      </div>
    )
  }
}