import React from "react";
import { RodapeSite } from './TelaCards'
import { TopoSite } from './TelaCards'
import { ContainerPrincipal } from '../App'


export default class Carrinho extends React.Component{
    
     
   
    render(){
        const carrinho = this.props.carrinhoCompras.map((item)=>{
            	return (
            	  <div>
            		<p>{item.title}</p>
            		<p>{item.price}</p>
            	  </div> 
            	)
              })


        return (
            <ContainerPrincipal>

                <TopoSite>
		    	    <h2>Header</h2>
                    <button onClick={()=> this.props.EscolheTelaInicial()}>home</button>
                    <button onClick={()=> this.props.EscolheTelaCarrinho()}>Carrinho</button>
		    	</TopoSite>

            {carrinho}

                <RodapeSite>
                    <h2>Footer</h2>
                </RodapeSite>

            </ContainerPrincipal>
        )
    }

    
    
}



// adicionarCarrinho =(id)=>{
//   const produto = listaDeProdutos.filter((produto)=>{
//         return produto.id === id
//       })
//       console.log(produto)

//   const novoCarrinho = [...this.state.carrinho, produto[0]]

//   this.setState({
//     carrinho: novoCarrinho
//   })
// }



// {this.state.carrinho.map((produto)=>{
//     return <div>
//     <p>{produto.nome},preço: {produto.preco}</p>
    
//     </div>
//   })}