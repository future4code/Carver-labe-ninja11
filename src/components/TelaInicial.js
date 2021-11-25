import React from 'react'
import { RodapeSite } from './TelaCards'
import { TopoSite } from './TelaCards'
import { ContainerPrincipal } from '../App'


export default class TelaInicial extends React.Component {

  render() {
    return (

      <ContainerPrincipal>

      <TopoSite>
			<h2>Header</h2>
			</TopoSite>

        <h2>Tela inicial:</h2>
        <button onClick={ () => this.props.EscolheTelaCadastro() }>Quero ser um ninja</button>
        <button onClick={ () => this.props.EscolheTelaCards()}> Lista de cards</button>

        <RodapeSite>
				<h2>Footer</h2>
			  </RodapeSite>

      </ContainerPrincipal>

    )
  }
}
