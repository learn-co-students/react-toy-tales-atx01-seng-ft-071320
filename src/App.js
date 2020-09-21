import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component {

  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    this.setState({ toys: data })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }


  addToy = (toy) => {
    this.setState({
      toys: [...this.state.toys, toy]
    })
  }

  deleteToy = (e) => {
    // console.log(e.target.id)
    // const filteredItems = items.filter(item => item !== valueToRemove)
    let filteredToys = this.state.toys.filter(toy => toy.id !== e.target.id)
    console.log(filteredToys)
    this.setState({
      toys: this.state.toys.filter(toy => toy.id !== e.target.id)
    })
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
        <ToyContainer deleteToy={this.deleteToy} toys={this.state.toys} />
      </>
    );
  }

}

export default App;




// future-self reminder: Couldn't get delete and like buttons to work 