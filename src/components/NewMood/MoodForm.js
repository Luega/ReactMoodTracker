import { useState } from "react";
import "./MoodForm.css";

function MoodForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const moodData = {
      title: enteredTitle,
      value: +enteredValue,
      date: new Date(enteredDate),
    };
    props.saveMoodDataToParentHandler(moodData);
    setEnteredTitle("");
    setEnteredValue("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-mood__controls">
          <div className="new-mood__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-mood__control">
            <label>Value</label>
            <input
              type="number"
              value={enteredValue}
              min="0"
              max="10"
              step="0.5"
              onChange={valueChangeHandler}
            />
          </div>
          <div className="new-mood__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-mood__actions">
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit">Add Mood</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MoodForm;
