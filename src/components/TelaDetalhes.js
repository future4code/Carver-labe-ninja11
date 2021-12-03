// import Axios from 'axios'
import React from 'react'

import { ContainerPrincipal } from '../App'


export default class TelaDetalhes extends React.Component {

 
  render() {

    return (
      <ContainerPrincipal  >
        
        <h2>Tela de Cards:</h2>
        <p>{this.props.detalhes.title}</p>
        <p>{this.props.detalhes.description}</p>
        <p>R${this.props.detalhes.price},00</p>
        <p>{this.props.detalhes.paymentMethods}</p>

      </ContainerPrincipal  >
    )
  }
}