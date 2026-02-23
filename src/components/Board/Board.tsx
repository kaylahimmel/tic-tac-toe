import { Square } from '..';

interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

export const Board = (props: BoardProps) => {
  function renderSquare(i: number) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  return (
    <div>
      <div className="board-col-headers">
        <span className="board-col-label">1</span>
        <span className="board-col-label">2</span>
        <span className="board-col-label">3</span>
      </div>
      <div className="board-row">
        <span className="board-row-label">A</span>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        <span className="board-row-label">B</span>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        <span className="board-row-label">C</span>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
