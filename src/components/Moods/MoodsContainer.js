import { useState } from "react";
import "./MoodsContainer.css";
import Card from "../UI/Card";
import MoodsYearFilter from "./MoodsYearFilter";
import MoodsList from "./MoodsList";

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
      <MoodsList moods={filteredMoods} />
    </Card>
  );
};

export default MoodsContainer;
