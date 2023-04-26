import "./MoodsContainer.css";
import MoodItem from "./MoodItem";
import Card from "../UI/Card";

const MoodsContainer = (props) => {
  return (
    <Card className="moodsContainer">
      {props.moods.map((mood, index) => {
        return (
          <MoodItem
            key={index}
            title={mood.title}
            value={mood.value}
            date={mood.date}
          />
        );
      })}
    </Card>
  );
};

export default MoodsContainer;
