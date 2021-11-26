import React from "react";
import { ContainerPrincipal } from '../App'


export default class Carrinho extends React.Component{
    
    valorTotal = () => {
        let total = 0

        for (let servicos of this.props.carrinhoCompras){
            total = (total + (servicos.price))
        }
        console.log(total)
        return total
    }
    
   
    render(){
        const carrinho = this.props.carrinhoCompras.map((item)=>{
            	return (
            	  <div>
            		<p>{item.title} - {item.price}</p>
            		<button onClick={()=>this.props.macacoGuariba(item.id)}>X</button>   
            	  </div> 
            	)
              })


        return (
            <ContainerPrincipal>
            <h2>Carrinho:</h2>

            {carrinho}

            <p>Valor Total: R${this.valorTotal()}</p>

            </ContainerPrincipal>
        )
    }

    
    
}
