import "./MoodsList.css";
import MoodItem from "./MoodItem";

const MoodsList = (props) => {
  if (props.moods.length === 0) {
    return <h2 className="moods-list__fallback">Found no moods</h2>;
  }

  return (
    <ul className="moods-list">
      {props.moods.map((mood) => {
        return (
          <MoodItem
            key={mood.id}
            title={mood.title}
            value={mood.value}
            date={mood.date}
          />
        );
      })}
    </ul>
  );
};

export default MoodsList;
