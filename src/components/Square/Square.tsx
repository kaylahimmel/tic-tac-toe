interface SquareProps {
  value: string;
  onClick: () => void;
}

export const Square = (props: SquareProps) => {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
