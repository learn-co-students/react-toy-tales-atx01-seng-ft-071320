import React, { Component } from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends Component {


  renderToys = (toys) => {
    return toys.map(toy => <ToyCard key={toy.id} toy={toy} likeToy={this.props.likeToy} deleteToy={this.props.deleteToy}/>)
  }

  render() {
    return(
      <div id = "toy-collection" >
          { this.renderToys(this.props.toys) }
      </div>
    )
  }

  
}

export default ToyContainer;
