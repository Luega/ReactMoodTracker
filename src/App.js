import { useState } from "react";
import NewMood from "./components/NewMood/NewMood";
import MoodsContainer from "./components/Moods/MoodsContainer";

const App = () => {
  let INITIAL_MOODS = [];
  let year = 2019;
  while (year !== 2024) {
    let loopsNumber;
    if (year === 2023) {
      loopsNumber = 50;
    } else {
      loopsNumber = 150;
    }
    for (let i = 0; i < loopsNumber; i++) {
      let month;
      if (year === 2023) {
        month = Math.floor(Math.random() * 4);
      } else {
        month = Math.floor(Math.random() * 12);
      }
      const mood = {
        id: Math.random().toString(),
        title: "Happy",
        value: 10,
        date: new Date(year, month, Math.floor(Math.random() * 28)),
      };
      INITIAL_MOODS.push(mood);
    }
    year++;
  }
  INITIAL_MOODS.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const [moods, setMoods] = useState(INITIAL_MOODS);

  const addMoodHandler = (mood) => {
    setMoods((prevMoods) => {
      return [mood, ...prevMoods].sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    });
  };

  const removeMoodHandler = (id) => {
    setMoods(moods.filter((mood) => mood.id !== id));
  };

  return (
    <div>
      <NewMood addMoodToParentHandler={addMoodHandler} />
      <MoodsContainer
        moods={moods}
        removeMoodToParentHandler={removeMoodHandler}
      />
    </div>
  );
};

export default App;
