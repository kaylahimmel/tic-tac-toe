import React from 'react';
import { createRoot } from 'react-dom/client';
import { calculateWinner } from './utils';
import { Board } from './components';
import { ROWS } from './constants/constants';
import './index.css';

export const Game = () => {
  const [history, setHistory] = React.useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [isNext, setIsNext] = React.useState(true);

  function handleClick(i: number) {
    setHistory(history.slice(0, stepNumber + 1));
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = isNext ? 'X' : 'O';

    setHistory(
      history.concat([
        {
          squares: squares,
        },
      ]),
    );
    setStepNumber(history.length);
    setIsNext(!isNext);
  }

  function jumpTo(step: number) {
    setStepNumber(step);
    setIsNext(step % 2 === 0);
  }

  function resetGame() {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setIsNext(true);
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const isDraw = !winner && current.squares.every((s) => s !== null);


  const moves = history.map((step, move) => {
    let desc: string;
    if (move === 0) {
      desc = 'Start of game';
    } else {
      const player = move % 2 === 1 ? 'X' : 'O';
      const prevSquares = history[move - 1].squares;
      const squareIndex = step.squares.findIndex((s, i) => s !== prevSquares[i]);
      const row = ROWS[Math.floor(squareIndex / 3)];
      const col = (squareIndex % 3) + 1;
      desc = `${player} played in ${row}${col}`;
    }
    return (
      <li key={move} className="move-item" onClick={() => jumpTo(move)}>
        {desc}
      </li>
    );
  });

  const gameStatus = winner
    ? 'Winner: ' + winner
    : isDraw
    ? 'No winners'
    : 'Current player: ' + (isNext ? 'X' : 'O');

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <p className="game-status">{gameStatus}</p>
        {isDraw ? (
          <button className="play-again" onClick={resetGame}>Play again</button>
        ) : (
          <>
            <p className="moves-title">Move History</p>
            <ol>{moves}</ol>
          </>
        )}
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<Game />);
