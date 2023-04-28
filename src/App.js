import { useState } from "react";
import NewMood from "./components/NewMood/NewMood";
import MoodsContainer from "./components/Moods/MoodsContainer";

const App = () => {
  const INITIAL_MOODS = [
    {
      id: "e1",
      title: "Happy",
      value: 7,
      date: new Date(2022, 9, 14),
    },
    {
      id: "e2",
      title: "Sad",
      value: 3,
      date: new Date(2023, 5, 12),
    },
    {
      id: "e3",
      title: "Enthusiastic",
      value: 9,
      date: new Date(2019, 2, 28),
    },
    {
      id: "e4",
      title: "Normal",
      value: 5,
      date: new Date(2020, 4, 12),
    },
  ];
  const [moods, setMoods] = useState(INITIAL_MOODS);

  const addMoodHandler = (mood) => {
    setMoods((prevMoods) => {
      return [mood, ...prevMoods];
    });
  };

  return (
    <div>
      <h1>YOUR MOOD IS YOUR LIFE</h1>
      <NewMood addMoodToParentHandler={addMoodHandler} />
      <MoodsContainer moods={moods} />
    </div>
  );
};

export default App;
