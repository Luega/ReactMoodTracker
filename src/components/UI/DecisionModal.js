import "./DecisionModal.css";
import Card from "./Card";
import Button from "./Button";

const DecisionModal = (props) => {
  return (
    <div>
      <div onClick={props.onCancelHandler} className="backdrop" />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onCancelHandler} buttonText={"Cancel"} />
          <Button onClick={props.onActionHandler} buttonText={"Confirm"} />
        </footer>
      </Card>
    </div>
  );
};

export default DecisionModal;
