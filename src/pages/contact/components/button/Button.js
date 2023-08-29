import "./button.scss";

const Button = ({ onClick, children }) => {
  return (
    <button className="contact-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
