import "./Button.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.buttonText}
    </button>
  );
}

export default Button;
