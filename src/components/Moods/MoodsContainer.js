import { useState } from "react";
import "./MoodsContainer.css";
import Card from "../UI/Card";
import MoodsYearFilter from "./MoodsYearFilter";
import MoodItem from "./MoodItem";

const MoodsContainer = (props) => {
  const [chosenYear, setChosenYear] = useState(2023);

  const filterChangeHandler = (filteredYear) => {
    setChosenYear(filteredYear);
  };

  return (
    <Card className="moodsContainer">
      <MoodsYearFilter
        chosenYear={chosenYear}
        onChangeFilter={filterChangeHandler}
      />
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
