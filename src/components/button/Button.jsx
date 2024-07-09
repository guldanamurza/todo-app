import "./Button.css";

const Button = ({ children,backgroundColor ,...props }) => {
  return (
    <div>
      <button className="button" style={{ backgroundColor: `${backgroundColor}` }} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
