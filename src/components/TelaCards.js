// import Axios from 'axios'
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
    busca : "",
    valorMin: "",
    valorMax: ""
  }

  componentDidMount(){
    this.props.BuscarJobs()
  }

    

    

    url = this.props.urlRequisicao

    funcaoAux = (id) =>{
      this.props.EscolheTelaDetalhes()
      this.props.JobPorId(id)
    }

    atualizarBusca = (e) =>{
      this.setState({
       busca: e.target.value
      })
    }

    atualizarValorMin = (e) =>{
      this.setState({
       valorMin: e.target.value
      })
    }

    atualizarValorMax = (e) =>{
      this.setState({
       valorMax: e.target.value
      })
    }


  render() {

    // const meusJobs = this.state.banininha.map((item) => {
    //   return (
    //           <div>
    //           <p>{item.title}</p>
    //           <button onClick={()=>this.funcaoAux(item.id)}>Detalhes</button>
    //           </div>
    //   )
    // })

    return (

      <ContainerPrincipal>
        
			<TopoSite>
			<h2>Header</h2>
      <button onClick={()=> this.props.EscolheTelaInicial()}>home</button>
      <button onClick={()=> this.props.EscolheTelaCarrinho()}>Carrinho</button>
			</TopoSite>

         
        <h2>Tela de Cards:</h2>

        <button onClick={this.props.BuscarJobs}>buscar</button>
        
        <input
          placeholder="pesquisa"
          value={this.state.busca}
          onChange={this.atualizarBusca} 
        />
        
        <input
          type="number" 
          placeholder="Valor Minimo"
          value={this.state.valorMin}
          onChange={this.atualizarValorMin} 
        />

        <input
          type="number"
          placeholder="Valor Maximo"
          value={this.state.valorMax}
          onChange={this.atualizarValorMax} 
        />

        {this.props.banininha.filter((job)=>{
          return job.title.toLowerCase().includes(this.state.busca.toLocaleLowerCase())
        })
        .filter((job)=>{
          return this.state.valorMin === "" || job.price >= this.state.valorMin
        })
        .filter((job)=>{
          return this.state.valorMax === "" || job.price <= this.state.valorMax
        })
        .map((job)=>{
          return (
            <div>
            <p>{job.title}</p>
            <button onClick={()=>this.funcaoAux(job.id)}>Detalhes</button>
            <button onClick={()=>this.props.enviarCarrinho(job.id)}>Adicionar ao carrinho</button>
            </div>
      )
        })
        }

        <RodapeSite>
				<h2>Footer</h2>
			  </RodapeSite>

      </ContainerPrincipal>
    )
  }
}