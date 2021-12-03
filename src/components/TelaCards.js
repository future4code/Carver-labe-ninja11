// import Axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { ContainerPrincipal } from '../App'


export const TopoSite = styled.div`
	display: flex;
	height: 15vh;
	width: 100%;
	justify-content: center;
	align-items: center;
  background-color: #8e68b0
`

export const RodapeSite = styled.div`
	display: flex;
	height: 15vh;
	width: 100%;
	justify-content: center;
	align-items: center;
  background-color: #8e68b0
`

const ContainerCards = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 5px;
padding: 10px;
margin: 5px 0;
width: 100%;
font-weight: bolder;
`
const Card = styled.div`
background-color: #8e68b0 ;
padding: 10px;
`

export default class TelaCards extends React.Component {
  state = {
    busca : "",
    valorMin: "",
    valorMax: "",
    ordenacao:"title"
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

    atualizaOrdenacao = (e) =>{
      this.setState({
        ordenacao: e.target.value
      })
    }


  render() {


    return (

      <ContainerPrincipal>
         
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

        <div>

          <label for="sort"> Ordenação</label>
          <select
           name="sort"
           onChange={this.atualizaOrdenacao}
           value={this.state.ordenacao}
           >
            <option value="title"> Título </option>
            <option value="price" > Preço </option>
            <option value="dueDate" > Prazo </option>
          </select>


        </div>

        <ContainerCards>

        {this.props.banininha.filter((job)=>{
          return job.title.toLowerCase().includes(this.state.busca.toLocaleLowerCase())
        })
        .filter((job)=>{
          return this.state.valorMin === "" || job.price >= this.state.valorMin
        })
        .filter((job)=>{
          return this.state.valorMax === "" || job.price <= this.state.valorMax
        })
        .sort((a,b)=>{
          switch(this.state.ordenacao){
            case "title":
              return a.title.localeCompare(b.title)

            default:
              return a.price - b.price
          }
          
        })
        .map((job)=>{
          return (
            < Card >
            <p>{job.title}</p>
            <p>{job.price},00</p>
            <button onClick={()=>this.funcaoAux(job.id)}>Detalhes</button>
            <button onClick={()=>this.props.enviarCarrinho(job.id)}>Adicionar ao carrinho</button>
            </ Card >
      )
        })
        }
        </ContainerCards>
        

      </ContainerPrincipal>
    )
  }
}