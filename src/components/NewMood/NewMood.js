import { useState } from "react";
import "./NewMood.css";
import MoodForm from "./MoodForm";

function NewMood(props) {
  const [showForm, setShowForm] = useState(false);

  const saveMoodDataHandler = (enteredMoodData) => {
    const moodData = {
      ...enteredMoodData,
      id: Math.random().toString(),
    };
    props.addMoodToParentHandler(moodData);
    setShowForm(false);
  };

  const openFormHandler = () => {
    setShowForm(true);
  };

  const cancelFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-mood">
      {!showForm && <button onClick={openFormHandler}>Add new mood</button>}
      {showForm && (
        <MoodForm
          saveMoodDataToParentHandler={saveMoodDataHandler}
          onCancel={cancelFormHandler}
        />
      )}
    </div>
  );
}

export default NewMood;
