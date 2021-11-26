import React from 'react'
import { AppContainer } from './components/AppContainer'
import { Filters } from './components/Filters'
import { theme } from './components/theme'
import { ThemeProvider } from '@material-ui/core'

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
			<ThemeProvider theme={theme}>
			<AppContainer>
            <Header/>
			<Filters
			query={this.state.query}
			updateQuery={this.updateQuery}
			updateMinprice={this.updateMinprice}
			updateMinprice={this.updateMinprice}
			updateSortingParameter={this.updateSortingParameter}
			minPrice={this.state.minPrice}
			maxPrice={this.state.maxPrice}
			sortingParameter={this.state.sortingParameter}
			
			/>
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
			</ThemeProvider >
		)	
	}
	
}

export default App
