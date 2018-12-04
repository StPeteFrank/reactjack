import React, { Component } from 'react'
import cardBack from './card-back.png'

class Hand extends Component {
  render() {
    return (
      <>
        {this.props.cards.map((card, index) => {
          const cardSource =
            index > 0 && this.props.hidden ? cardBack : card.image
          return <img key={index} src={cardSource} />
        })}
      </>
    )
  }
}

export default Hand
