import "./button.scss";

const Button = ({ size, design, onClick, children }) => {
  return (
    <button className={`rounded-button ${size} ${design}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
