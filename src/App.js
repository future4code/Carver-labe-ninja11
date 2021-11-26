import React from "react";
import TelaDetalhes from "./components/TelaDetalhes";
import TelaInicial from "./components/TelaInicial";
import TelaCadastro from "./components/TelaCadastro";
import TelaCards from "./components/TelaCards";
import styled from "styled-components";
import Axios from "axios";
import Carrinho from "./components/Carrinho";
import { RodapeSite } from "./components/TelaCards";
import { TopoSite } from "./components/TelaCards";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
  background-color:#524c57 ;
`;

const ContainerCentral = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContainerDosBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background-color: #8e68b0;
  gap: 10px;
  padding-top: 10px;
  border: 3px solid #524c57;
`;
const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export default class App extends React.Component {
  state = {
    home: 1,
    inputData: "",
    detalhes: {},
    carrinhoCompras: [],
    banininha: [],
  };

  componentDidMount() {
    return this.EscolheTelaInicial();
  }

  MudarDeTela = () => {
    switch (this.state.home) {
      case 1:
        return (
          <TelaInicial
            EscolheTelaCadastro={this.EscolheTelaCadastro}
            EscolheTelaCards={this.EscolheTelaCards}
            urlRequisicao={this.urlRequisicao}
          />
        );
      case 2:
        return (
          <TelaCadastro
            EscolheTelaInicial={this.EscolheTelaInicial}
            urlRequisicao={this.urlRequisicao}
          />
        );
      case 3:
        return (
          <TelaCards
            EscolheTelaInicial={this.EscolheTelaInicial}
            urlRequisicao={this.urlRequisicao}
            EscolheTelaDetalhes={this.EscolheTelaDetalhes}
            JobPorId={this.JobPorId}
            enviarCarrinho={this.enviarCarrinho}
            banininha={this.state.banininha}
            BuscarJobs={this.BuscarJobs}
            EscolheTelaCarrinho={this.EscolheTelaCarrinho}
          />
        );
      case 4:
        return (
          <TelaDetalhes
            JobPorId={this.JobPorId}
            EscolheTelaInicial={this.EscolheTelaInicial}
            detalhes={this.state.detalhes}
          />
        );
      case 5:
        return (
          <Carrinho
            carrinhoCompras={this.state.carrinhoCompras}
            EscolheTelaInicial={this.EscolheTelaInicial}
            macacoGuariba={this.macacoGuariba}
          />
        );

      default:
        return this.setState({
          home: 1,
        });
    }
  };

  EscolheTelaInicial = () => {
    this.setState({
      home: 1,
    });
  };

  EscolheTelaCadastro = () => {
    this.setState({
      home: 2,
    });
  };

  EscolheTelaCards = () => {
    this.setState({
      home: 3,
    });
  };

  EscolheTelaDetalhes = () => {
    this.setState({
      home: 4,
    });
  };
  EscolheTelaCarrinho = () => {
    this.setState({
      home: 5,
    });
  };

  urlRequisicao = `https://labeninjas.herokuapp.com`;

  BuscarJobs = () => {
    Axios.get(this.urlRequisicao + `/jobs`, {
      headers: {
        Authorization: "f64e14be-0b70-4a40-a1dd-92a99fb16ddf",
      },
    })
      .then((resposta) => {
        console.log(resposta.data.jobs);
        this.setState({ banininha: resposta.data.jobs });
      })
      .catch((erro) => {
        console.log(erro.response.data);
      });
  };

  JobPorId = (id) => {
    Axios.get(this.urlRequisicao + `/jobs/${id}`, {
      headers: {
        Authorization: "f64e14be-0b70-4a40-a1dd-92a99fb16ddf",
      },
      data: {
        source: id,
      },
    }).then((resposta) => {
      console.log(resposta.data);
      // const DetalhesId = [...resposta.data]
      this.setState({ detalhes: resposta.data });
      console.log(this.state.detalhes);
    })
    .catch((erro) => {
    	alert(erro.response.data)
    })
  };

  enviarCarrinho = (id) => {
    const banininha2 = this.state.banininha.filter((item) => {
      return item.id === id;
    });
    console.log(id);

    const novoCarrinho = [...this.state.carrinhoCompras, banininha2[0]];

    this.setState({
      carrinhoCompras: novoCarrinho,
    });
    console.log(novoCarrinho);
  };

  macacoGuariba = (id) => {
    const itemDeletado = window.confirm("Quer mesmo excluir este serviço?");
    if (itemDeletado) {
      const carrinhoAtualizado = this.state.carrinhoCompras.filter((item) => {
        return item.id !== id;
      });

      this.setState({ carrinhoCompras: carrinhoAtualizado });
    }
  };


  urlRequisicao = `https://labeninjas.herokuapp.com`;

  render() {
    return (
      <ContainerPrincipal>
        <TopoSite>
          <h2>LabeNinjas</h2>
        </TopoSite>

        <ContainerCentral>
          <ContainerDosBotoes>
            <button onClick={this.EscolheTelaInicial}>Home</button>
            <button onClick={this.EscolheTelaCadastro}>
              Quero ser um Ninja
            </button>
            <button onClick={this.EscolheTelaCards}>Lista de serviços</button>
            <button onClick={this.EscolheTelaCarrinho}>Carrinho</button>
          </ContainerDosBotoes>

          <ContainerConteudo>{this.MudarDeTela()}</ContainerConteudo>
        </ContainerCentral>

        <RodapeSite>
          <p>Desenvolvido pelo grupo Banininha</p>
        </RodapeSite>
      </ContainerPrincipal>
    );
  }
}
