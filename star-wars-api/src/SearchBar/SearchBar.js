import React from 'react'

export default class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
  
    handleSubmit = e => {
        e.preventDefault()

        const { search } = e.target
        console.log(search.value)
        this.setState({
            searchTerm: search.value
        }, this.handleSearch)
    }
    
    handleSearch = () => {
        const searchTerm = this.state.searchTerm
        
        fetch(`https://swapi.co/api/people/?search=${searchTerm}`)
            .then((peopleRes) => {
                if (!peopleRes)
                    return peopleRes.json().then(e => Promise.reject(e))
                return peopleRes.json()
            })
            .then((people) => {
                console.log(people)
                this.props.handlePeople(people.results)
            })
            .catch(error => {
                console.error({ error })
            }) 
        
    }

    render() {
        
        return (
            <>
                <form id="search_form" onSubmit={this.handleSubmit}>
                    <label className='search' htmlFor='search_bar'>
                        Search the glut of information for:
                        {' '}
                    </label>
                    <input type="text" name="search" id="search_bar"></input>
                    <button type='submit'>Submit</button>
                </form>
            </>
        )
    }
}