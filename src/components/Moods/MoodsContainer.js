import { useState } from "react";
import "./MoodsContainer.css";
import Card from "../UI/Card";
import MoodsYearFilter from "./MoodsYearFilter";
import MoodItem from "./MoodItem";

const MoodsContainer = (props) => {
  const [chosenYear, setChosenYear] = useState("2023");

  const filterChangeHandler = (filteredYear) => {
    setChosenYear(filteredYear);
  };

  const filteredMoods = props.moods.filter(
    (mood) => mood.date.getFullYear().toString() === chosenYear
  );

  return (
    <Card className="moodsContainer">
      <MoodsYearFilter
        chosenYear={chosenYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredMoods.map((mood) => {
        return (
          <MoodItem
            key={mood.id}
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
