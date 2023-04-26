import MoodsContainer from "./components/MoodsContainer";

function App() {
  const moods = [
    {
      id: "e1",
      title: "Happy",
      value: 7,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "Sad",
      value: 3,
      date: new Date(2023, 2, 12),
    },
    {
      id: "e3",
      title: "Enthusiastic",
      value: 9,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "Normal",
      value: 5,
      date: new Date(2023, 4, 12),
    },
  ];

  return (
    <div>
      <h1>YOUR MOOD IS YOUR LIFE</h1>
      <MoodsContainer moods={moods} />
    </div>
  );
}

export default App;
