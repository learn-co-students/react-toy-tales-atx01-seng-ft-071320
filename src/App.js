import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component {

  state = {
    display: false,
    toys: data
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
      .then(response => response.json())
      .then(data => {
        this.setState({
          toys: data
        })
      });
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToy = (newToy) => {
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    })
    this.setState({
      toys: [newToy, ...this.state.toys]
    })
  }

  deleteToy = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(this.setState({
        toys: this.state.toys.filter(toy => toy.id !== id)
      }))
  }

  likeToy = (id) => {
    const thisToy = this.state.toys.find(toy => toy.id === id)
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "likes": thisToy.likes + 1
      }),
    })
    .then(this.setState({
      toys: this.state.toys
    }))
  }

  render() {
    return (
      <>
        <Header />
        { this.state.display
          ?
          <ToyForm addToy={this.addToy} />
          :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} likeToy={this.likeToy} deleteToy={this.deleteToy} />
      </>
    );
  }

}

export default App;
