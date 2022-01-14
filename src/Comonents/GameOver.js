import React, { useEffect } from "react"

function GameOver(props) {
  return ( props.show?
    <div id="gameOver">
        <div className="wellDone">
            Well Done!
        </div>
        <button className="play" id="restart" onClick={props.handleRestart}>Jogue novamente</button>
    </div>: <></>
  )
}

export default GameOver