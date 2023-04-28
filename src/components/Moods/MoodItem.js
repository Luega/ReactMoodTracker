import "./MoodItem.css";
import Card from "../UI/Card";
import MoodDate from "./MoodDate";

const MoodItem = (props) => {
  return (
    <ul>
      <Card className="mood-item">
        <MoodDate date={props.date} />
        <div className="mood-item__description">
          <h2>{props.title}</h2>
          <div className="mood-item__value">Scale: {props.value}</div>
        </div>
      </Card>
    </ul>
  );
};

export default MoodItem;
