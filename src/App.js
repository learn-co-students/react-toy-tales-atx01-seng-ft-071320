import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component {

  toyUrl = 'http://localhost:3000/toys'

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount() {
    fetch(this.toyUrl)
      .then(res => res.json())
      .then(toys => this.setState({ toys: toys }))
  }

  addToy = (toyInfo) => {
    fetch(this.toyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toyInfo)
    })
      .then(res => res.json())
      .then(toy => this.setState({ display: false, toys: [...this.state.toys, toy] }))
  }

  deleteToy = (toyID) => {
    fetch(`${this.toyUrl}/${toyID}`, {
      method: "DELETE"
    })
      .then(
        this.setState((previousState) => ({ toys: previousState.toys.filter(toy => toy.id !== toyID) })
        ))
  }

  likeToy = (toyID, likes) => {
    fetch(`${this.toyUrl}/${toyID}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: likes + 1 })
    })
      .then(
        this.setState((previousState) =>
          ({
            toys: previousState.toys.map(toy => {
              if (toy.id === toyID) {
                toy.likes = toy.likes + 1
              }
              return toy
            })
          }
          ))
      )
  }

  render() {
    return (
      <>
        <Header />
        { this.state.display ? <ToyForm addToy={this.addToy} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} likeToy={this.likeToy} />
      </>
    );
  }

}

export default App;
