import React from 'react'
import TelaInicial from './components/TelaInicial'
import TelaCadastro from './components/TelaCadastro'
import TelaCards from './components/TelaCards'
import TelaDetalhes from './components/TelaDetalhes'
import Axios from 'axios'

export default class App extends React.Component {

	state = {
		home: 1,
		inputData: "",
		detalhes: {}
	}

	componentDidMount() {
		return this.EscolheTelaInicial()
	}

	MudarDeTela = () => {
		switch (this.state.home) {
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
					EscolheTelaDetalhes={this.EscolheTelaDetalhes}
					JobPorId={this.JobPorId}
				/>
			case 4:
				return <TelaDetalhes
					JobPorId={this.JobPorId}
					EscolheTelaInicial={this.EscolheTelaInicial}
					detalhes={this.state.detalhes}
				/>
			default:
				return this.setState({
					home: 1
				})
		}
	}

	EscolheTelaInicial = () => {
		this.setState({
			home: 1
		})
	}

	EscolheTelaCadastro = () => {
		this.setState({
			home: 2
		})
	}

	EscolheTelaCards = () => {
		this.setState({
			home: 3
		})
	}

	EscolheTelaDetalhes = () => {
		this.setState({
			home: 4
		})
	}

	urlRequisicao = `https://labeninjas.herokuapp.com`

	JobPorId = (id) => {

		Axios.get((this.urlRequisicao + `/jobs/${id}`), {
			headers: {
				Authorization: "f64e14be-0b70-4a40-a1dd-92a99fb16ddf"
			},
			data: {
				source: id
			}
		})
			.then((resposta) => {
				console.log(resposta.data)
				// const DetalhesId = [...resposta.data]
				this.setState({ detalhes: resposta.data })
				console.log(this.state.detalhes)
			})
			// .catch((erro) => {
			// 	alert(erro.response.data)
			// })
	}

	render() {
		return (
			<div>
				{this.MudarDeTela()}
			</div>
		)
	}
}


