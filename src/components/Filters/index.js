import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import styled from "styled-components"

export function Filters(props){
    const FiltersContainer = styled.div
    return <ThemeProvider theme={theme}>
		<FiltersContainer>
					<input placeholder='Busca'
					       value={this.props.query} 
						   onChange={props.updateQuery}
					/>
					
					<input type="number"
					       placeholder="Preço mínimo"
					       value={this.props.minPrice} 
						   onChange={props.updateMinprice}
					/>

					<input type="number"
					       placeholder="Preço máximo"
					       value={this.props.maxPrice} 
						   onChange={props.updateMaxprice}
					/>
					<span>
						<label for="sort"></label>
						<select name="sort"
						        value={this.props.sortingParameter} 
						        onChange={props.updateSortingParameter}
						>
							<option value="title">Título do trabalho oferecido. Espera receber uma string.</option>
							<option value="description">Detalhamento acerca do serviço. Espera receber uma string.</option>
							<option value="price">Valor cobrado pelo serviço. Espera receber um number.</option>
							<option value="paymentMethods">Espera receber um array de strings com os meios de pagamento aceitos.</option>
							<option value="dueDate">Espera receber a data até quando o serviço ficará disponível no formato internacional: AAAA/MM/DD</option>							
						</select>
					</span> 
            </FiltersContainer>
			</ThemeProvider>
}