import React, { useEffect, useState } from "react"
import GameOver from "./Comonents/GameOver"
import game from "./game/game"
import GameBoard from "./Comonents/GameBoard"

function MemoryGame() {
  const [gameOver, setGameover] = useState(false)
  const  [cards, setCards] = useState([])

  useEffect(()=> {
    setCards(game.createCardsFromTechs())
  },[])

  function handleRestart(){
    setGameover(false)
    setCards(game.createCardsFromTechs())
    game.clearCards();
    
  }

  function handleFlip(card){
    if (game.setCard(card.id)) {

     
      if (game.secondCard) {
          if (game.checkMatch()) {
              game.clearCards();
              if (game.checkGameOver()) {
                  //GameOver
                  setGameover(true)
              }
          } else {
              setTimeout(() => {
                  //No Match
                  game.unflipCards();
                  setCards([...game.cards])
              }, 1000);

          };
      }
  }
    setCards([...game.cards])
  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={handleRestart}></GameOver>
    </div>
  )
}

export default MemoryGame