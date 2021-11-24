import React from 'react'
import  TelaInicial  from './components/TelaInicial'
import TelaCadastro from './components/TelaCadastro'
import TelaCards from './components/TelaCards'

export default class App extends React.Component {

	state={
		home: 1,
		inputData:""
	  }

	  componentDidMount(){
		  return this.EscolheTelaInicial()
	  }
	
	  MudarDeTela = () => {
		switch(this.state.home) {
		  case 1:
			return <TelaInicial
			EscolheTelaCadastro={this.EscolheTelaCadastro}
			EscolheTelaCards={this.EscolheTelaCards}
			urlRequisicao={this.urlRequisicao}
			/>
		  case 2:
			return <TelaCadastro
			EscolheTelaInicial={this.EscolheTelaInicial}
			urlRequisicao={this.urlRequisicao}
			/>
		  case 3: 
			return <TelaCards
			EscolheTelaInicial={this.EscolheTelaInicial}
			urlRequisicao={this.urlRequisicao}
			/>
		  default:
			return this.setState({
			home: 1
		  })
		}
	  }
	
	  EscolheTelaInicial = () =>{
		this.setState({
		  home : 1
		})
	  }
	
	  EscolheTelaCadastro = () =>{
		this.setState({
		  home : 2
		})
	  }
	
	  EscolheTelaCards = () =>{
		this.setState({
		  home : 3
		})
	  }

	  urlRequisicao = `https://labeninjas.herokuapp.com`
	
	render(){
	return (
		<div>
        {this.MudarDeTela()}
		</div>
	)
	}
}


