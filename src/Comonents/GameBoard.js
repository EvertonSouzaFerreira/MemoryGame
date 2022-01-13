import React, { useEffect } from "react"
import Card from "./Card"

function GameBoard(props) {
  return (
    <div id="gameBoard">
        {props.cards.map((card, index) =>
            <Card handleFlip={props.handleFlip} key={index} card={card}></Card>
        )}
    </div>
  )
}

export default GameBoard