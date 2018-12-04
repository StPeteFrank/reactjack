import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <h1>Blackjack</h1>
        <div className="center">
          <p className="game-results">Test Your Skills!</p>
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
