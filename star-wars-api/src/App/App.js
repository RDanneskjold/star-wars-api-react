import React, { Component } from 'react';
import './App.css';
import ErrorPage from '../ErrorPage/ErrorPage'
import SearchBar from '../SearchBar/SearchBar'
import Homeworld from '../Homeworld/Homeworld'
import Vehicles from '../Vehicles/Vehicles'

class App extends Component {
  state = {
    people: [],
  }

  handlePeople = people => {
    this.setState({
      people,
    })
  }

  renderPeople = () => {

    const genericFields = [
      'height', 
      'mass', 
      'hair_color', 
      'skin_color', 
      'eye_color', 
      'birth_year', 
      'gender'
    ]

    return (
      <ul>
        {this.state.people.map((person) =>
          <>
            <h2>{person.name}</h2>
            <li>
              {genericFields.map(key =>
                <div>
                  {key}: {person[key]}
                </div>
              )}
              <Homeworld homeworld={person.homeworld} />
              {<br></br>}
              <Vehicles vehicles={person.vehicles} />
            </li>
          </>
        )}
      </ul>
    ) 
  }
  
  render() {
    return (
      <ErrorPage>
        <div className='App'>
          <header className='App_header'>
            <h1>A glut of Star Wars information</h1>
          </header>
          <main className='App_main'>
            <SearchBar handlePeople={this.handlePeople} />
            {this.renderPeople()}
          </main>
        </div>
      </ErrorPage>
    )
  }
}

export default App;
