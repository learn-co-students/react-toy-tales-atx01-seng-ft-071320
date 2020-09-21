import React, { Component } from 'react';

class ToyForm extends Component {

  submitToy = (e) => {
    e.preventDefault()
    const newToy = {
      "name": e.target.name.value,
      "image": e.target.image.value,
      "likes": 0
    }
    this.props.addToy(newToy)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.submitToy}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
