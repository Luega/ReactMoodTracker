import React from "react";
import "./MoodItem.css";
import MoodDate from "./MoodDate";

export default function MoodItem(props) {
  return (
    <div className="mood-item">
      <MoodDate date={props.date} />
      <div className="mood-item__description">
        <h2>{props.title}</h2>
        <div className="mood-item__value">Scale: {props.value}</div>
      </div>
    </div>
  );
}
