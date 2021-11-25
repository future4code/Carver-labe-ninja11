import React from "react";
import Axios from "axios";
import { RodapeSite } from './TelaCards'
import { TopoSite } from './TelaCards'
import { ContainerPrincipal } from '../App'


export default class TelaCadastro extends React.Component {

    state = {
        inputTitulo: "",
        inputDescricao: "",
        inputPreco: 0,
        inputPagamento: ["PayPal", "boleto"],
        inputData: ""
    }

    onChangeTitulo = (event) => {
        this.setState({ inputTitulo: event.target.value })
    }
    onChangeDescricao = (event) => {
        this.setState({ inputDescricao: event.target.value })
    }
    onChangePreco = (event) => {
        this.setState({ inputPreco: event.target.value })
    }
    onChangePagamento = (event) => {
        this.setState({ inputPagamento: event.target.value })
    }
    onChangeData = (event) => {
        this.setState({ inputData: event.target.value })
    }

    CreateJob = () => {
        const body = {
            title: this.state.inputTitulo,
            description: this.state.inputDescricao,
            price: Number(this.state.inputPreco),
            paymentMethods: this.state.inputPagamento,
            dueDate: this.state.inputData
        }
        Axios.post(
            "https://labeninjas.herokuapp.com/jobs",
            body,
            {
              headers: {
                Authorization: "f64e14be-0b70-4a40-a1dd-92a99fb16ddf"
              }
            }
          )
          .then((resposta) => {
            alert("Serviço adicionado com sucesso")
          })
          .catch((erro) => {
            console.log(erro.response.data)
          });
      };

  render() {
    return (
      <ContainerPrincipal>

      <TopoSite>
			<h2>Header</h2>
      <button onClick={() => this.props.EscolheTelaInicial()}>home</button>
			</TopoSite>

        
        <h2>Tela de Cadastro:</h2>
        <input value={this.state.inputTitulo} onChange={this.onChangeTitulo} placeholder={"Título"}/>
        <input value={this.state.inputDescricao} onChange={this.onChangeDescricao} placeholder={"Descrição"}/>
        <input type="number" value={this.state.inputPreco} onChange={this.onChangePreco} placeholder={"Preço"}/>
        <input value={this.state.inputPagamento} onChange={this.onChangePagamento} placeholder={"Formas de Pagamento"}/>
        <input type="date" value={this.state.inputData} onChange={this.onChangeData} placeholder={"Data"}/>
        <button onClick={this.CreateJob}>botao</button>

        <RodapeSite>
				<h2>Footer</h2>
			  </RodapeSite>
        
      </ContainerPrincipal>
    );
  }
}
