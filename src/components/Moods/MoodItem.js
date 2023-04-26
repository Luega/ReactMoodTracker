import "./MoodItem.css";
import MoodDate from "./MoodDate";
import Card from "../UI/Card";

const MoodItem = (props) => {
  return (
    <Card className="mood-item">
      <MoodDate date={props.date} />
      <div className="mood-item__description">
        <h2>{props.title}</h2>
        <div className="mood-item__value">Scale: {props.value}</div>
      </div>
    </Card>
  );
};

export default MoodItem;
