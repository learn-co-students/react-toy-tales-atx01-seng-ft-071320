import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = (e) => {
    this.props.deleteToy(this.props.toy.id)
  }

  handleLike = (e) => {
    this.props.likeToy(this.props.toy.id)
    this.props.toy.likes = this.props.toy.likes + 1
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete} >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
