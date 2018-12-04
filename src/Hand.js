import React, { Component } from 'react'

class Hand extends Component {
  render() {
    return (
      <>
        {this.props.cards.map((card, index) => {
          return <img key={index} src={card.image} />
        })}
      </>
    )
  }
}

export default Hand
