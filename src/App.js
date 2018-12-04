import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deck_id: '',
      player: []
    }
  }

  whenNewDeckIsShuffled = () => {
    // this will happen after state is updated

    // call the API for "Draw a Card"
    // -- draw two cards
    // -- make sure to supply the deck_id
    // -- console log the result to be sure it
    // -- works the way we want
    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${
          this.state.deck_id
        }/draw/?count=2`
      )
      .then(response => {
        console.log(response.data)
        const newState = {
          player: update(this.state.player, { $push: response.data.cards })
        }
        this.setState(newState)
      })
  }
  //1.First things first
  componentDidMount = () => {
    axios
      .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        const newState = {
          deck_id: response.data.deck_id
        }

        this.setState(newState, this.whenNewDeckIsShuffled)
        //comes from the new state whenNewDeckIsShuffled
      })
  }

  render() {
    return (
      <>
        <h1>Blackjack</h1>
        <div className="center">
          <p className="game-results">Deal me in!</p>
        </div>
        <div className="center">
          <button className="reset hidden">Play Again!</button>
        </div>

        <div className="play-area">
          <div className="left">
            <button className="hit">Hit</button>
            <p>Your Cards:</p>
            <p className="player-total">Total 0</p>
            <div className="player-hand" />
          </div>

          <div className="right">
            <button className="stay">Stay</button>
            <p>Dealer Cards:</p>
            <p className="dealer-total">Facedown</p>
            <div className="dealer-hand">
              <img
                className="cardback-one"
                alt="card"
                src="./images/card back red.png"
              />
              <img
                className="cardback-two"
                alt="card"
                src="./images/card back red.png"
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
