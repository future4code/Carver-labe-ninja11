import Axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { ContainerPrincipal } from '../App'


export const TopoSite = styled.div`
	display: flex;
	border: 1px solid blue;
	height: 15vh;
	width: 100%;
	justify-content: center;
	align-items: center;
`

export const RodapeSite = styled.div`
	display: flex;
	border: 1px solid blue;
	height: 15vh;
	width: 100%;
	justify-content: center;
	align-items: center;
`

export default class TelaCards extends React.Component {
  state = {
    banininha: [],
  }

  componentDidMount(){
    this.BuscarJobs()
  }

    BuscarJobs = () =>{
        Axios.get("https://labeninjas.herokuapp.com/jobs", {
          headers: {
            Authorization: "f64e14be-0b70-4a40-a1dd-92a99fb16ddf"
          }
        })
        .then((resposta) => {
          console.log(resposta.data.jobs)
          this.setState({banininha: resposta.data.jobs})
        })
        .catch((erro) => {
          console.log(erro.response.data)
        })
    }

    url = this.props.urlRequisicao

    funcaoAux = (id) =>{
      this.props.EscolheTelaDetalhes()
      this.props.JobPorId(id)
    }

  render() {

    const meusJobs = this.state.banininha.map((item) => {
      return (
              <div>
              <p>{item.title}</p>
              <button onClick={()=>this.funcaoAux(item.id)}>Detalhes</button>
              </div>
      )
    })
    return (

      <ContainerPrincipal>
        
			<TopoSite>
			<h2>Header</h2>
      <button onClick={()=> this.props.EscolheTelaInicial()}>home</button>
			</TopoSite>

         
        <h2>Tela de Cards:</h2>

        <button onClick={this.BuscarJobs}>buscar</button>
        

        {meusJobs}

        <RodapeSite>
				<h2>Footer</h2>
			  </RodapeSite>

      </ContainerPrincipal>
    )
  }
}