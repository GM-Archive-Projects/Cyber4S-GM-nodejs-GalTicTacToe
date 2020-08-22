import React, { useState, useEffect  } from "react";
import Board from "./Board";
import Winner from './Winner'

const styles = {
  width: "200px",
  margin: "20px auto",
};
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true);
  const [gameWon, setGameWon] = useState(false)
  // const [winnerSaved, setWinnerSaved] = useState(false)
  // const [winnerName, setWinnerName] = useState("");
  const winner = calculateWinner(history[stepNumber]);


  const handleClick = i => {
      const timeInHistory = history.slice(0, stepNumber +1);
      const current = timeInHistory[stepNumber];
      const squares = [...current];
    // If the user Click an occupied square or if the game is finished and we have a winner return
    if (winner || squares[i]) return;

    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares])
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  }

  const jumpTo = step => {
    // setGameWon(false);
    // setWinnerSaved(false)
    setStepNumber(step);
    setXisNext(step % 2 === 0)
      
  };
  
  useEffect(() => {
    if(winner)
    {
      setGameWon(true);
    }
  }, [winner])

  const renderMoves = () => (
      history.map((_step, move) => {
          const destination = move ? `Got to Move #${move}`: 'Go To Start';
          return (
              <li key={move}>
              <button onClick={() => jumpTo(move)}>{destination}</button>

              </li>

          )
      }) 
  );

  const newGame = () => {
    setHistory([Array(9).fill(null)])
    setStepNumber(0);
    setXisNext(true); 
    calculateWinner(history[stepNumber]);
  }

  
  
  return (

    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? <Winner winner={winner} setOpen={setGameWon} gameWon ={gameWon}   />
            : "Next Player is: " + (xIsNext ? "X" : "O")}
        </p>
        <li>
        <button onClick={() => newGame()}>"Reset Game"</button>
        </li>
        <br></br>
        {renderMoves()}
      </div>
    </>
  );
};


function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export default Game;
