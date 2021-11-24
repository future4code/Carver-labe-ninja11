import Axios from 'axios'
import React from 'react'

export default class TelaCards extends React.Component {
  state = {
    banininha: []
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


  render() {

    const meusJobs = this.state.banininha.map((item) => {
      return (
              <p>{item.title}</p>
      )
    })
    return (
      <div>
          <button onClick={()=> this.props.EscolheTelaInicial()}>home</button>
        <h2>Tela de Cards:</h2>
        <button onClick={this.BuscarJobs}>buscar</button>
        {meusJobs}
        <hr/>
      </div>
    )
  }
}