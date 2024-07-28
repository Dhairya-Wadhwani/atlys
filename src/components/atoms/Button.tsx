interface ButtonProps {
  backgroundColor?: string;
  text: string;
  style?: string;
  onClick: () => void;
}
const Button = ({
  backgroundColor = "bg-blue",
  text,
  style,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button className={`${backgroundColor} ${style}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
