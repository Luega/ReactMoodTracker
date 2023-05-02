import { useState } from "react";
import "./MoodItem.css";
import Card from "../UI/Card";
import MoodDate from "./MoodDate";
import DecisionModal from "../UI/DecisionModal";

const MoodItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const removeCardHandler = () => {
    props.removeMoodToParentHandler(props.id);
  };

  const toggleHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <DecisionModal
          title={"DELETE MOOD"}
          message={"Do you want to delete this mood?"}
          onCancelHandler={toggleHandler}
          onActionHandler={removeCardHandler}
        />
      )}
      <li onClick={toggleHandler} className="mood-list">
        <Card className="mood-item">
          <MoodDate date={props.date} />
          <div className="mood-item__description">
            <h2>{props.title}</h2>
            <div className="mood-item__value">Scale: {props.value}</div>
          </div>
        </Card>
      </li>
    </>
  );
};

export default MoodItem;
