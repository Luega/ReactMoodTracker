import React from "react";
import "./MoodsContainer.css";
import MoodItem from "./MoodItem";

export default function MoodsContainer(props) {
  return (
    <div className="moodsContainer">
      <MoodItem
        title={props.moods[0].title}
        value={props.moods[0].value}
        date={props.moods[0].date}
      />
      <MoodItem
        title={props.moods[1].title}
        value={props.moods[1].value}
        date={props.moods[1].date}
      />
      <MoodItem
        title={props.moods[2].title}
        value={props.moods[2].value}
        date={props.moods[2].date}
      />
      <MoodItem
        title={props.moods[3].title}
        value={props.moods[3].value}
        date={props.moods[3].date}
      />
    </div>
  );
}
