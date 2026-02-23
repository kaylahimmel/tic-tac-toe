interface SquareProps {
  value: string;
  onClick: () => void;
}

export const Square = (props: SquareProps) => {
  return (
    <button
      className={`square ${props.value === 'O' ? 'square-o' : ''}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
