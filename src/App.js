import React from 'react'
import { AppContainer } from './components/AppContainer'

class App extends React.Component {
	state = {
		jobs: jobList,
		query: "",
		minPrice:"",
		maxPrice:"",
		sortingParameter:"title",
	}

	updateQuery=(ev)=> {
        this.setState({
			query: ev.target.value
		})
	}
	
	updateMinprice=(ev)=> {
        this.setState({
			minPrice: ev.target.value
		})
	}
	
	updateMaxprice=(ev)=> {
        this.setState({
			maxPrice: ev.target.value
		})
	}

	updateSortingParameter=(ev)=> {
        this.setState({
			sortingParameter: ev.target.value
		})
	}

	render () {
		return (
			<AppContainer>
            <FiltersContainer>
					<input placeholder='Busca'
					       value={this.state.query} 
						   onChange={this.updateQuery}
					/>
					
					<input type="number"
					       placeholder="Preço mínimo"
					       value={this.state.minPrice} 
						   onChange={this.updateMinprice}
					/>

					<input type="number"
					       placeholder="Preço máximo"
					       value={this.state.maxPrice} 
						   onChange={this.updateMaxprice}
					/>
					<span>
						<label for="sort"></label>
						<select name="sort"
						        value={this.state.sortingParameter} 
						        onChange={this.updateSortingParameter}
						>
							<option value="title">Título do trabalho oferecido. Espera receber uma string.</option>
							<option value="description">Detalhamento acerca do serviço. Espera receber uma string.</option>
							<option value="price">Valor cobrado pelo serviço. Espera receber um number.</option>
							<option value="paymentMethods">Espera receber um array de strings com os meios de pagamento aceitos.</option>
							<option value="dueDate">Espera receber a data até quando o serviço ficará disponível no formato internacional: AAAA/MM/DD</option>							
						</select>
					</span>
			
			</FiltersContainer>
				<ListContainer>
					{this.state.servicos
					.filter(job => {
						return job.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
						job.description.toLowerCase().includes(this.state.query.toLowerCase())
					})
					.filter(job => {
						return this.state.minPrice === "" || job.price >= this.state.minPrice 
					})
					.filter(job => {
						return this.state.maxPrice === "" || job.price <= this.state.maxPrice 
					})
					.sor((currentJob,nextJob) => {
						switch (this.state.sortingParameter){
							case "title":
								return currentJob.title.localeCompare(nextJob.title)
								case "duedate":
								return new Date (currentJob.duedate).getTime() - new Date (nextJob.duedate).getTime()
							default:
							return currentJob.price - nextJob.price
						}
					
					})
					.map(job => {
						return <Card key={job.id} job={job}/>
					})}
				</ListContainer>



			</AppContainer>
			
		)	
	}
	
}

export default App
