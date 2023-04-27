import "./NewMood.css";
import MoodForm from "./MoodForm";

function NewMood(props) {
  const saveMoodDataHandler = (enteredMoodData) => {
    const moodData = {
      ...enteredMoodData,
      id: Math.random().toString(),
    };
    props.addMoodToParentHandler(moodData);
  };

  return (
    <div className="new-mood">
      <MoodForm saveMoodDataToParentHandler={saveMoodDataHandler} />
    </div>
  );
}

export default NewMood;
