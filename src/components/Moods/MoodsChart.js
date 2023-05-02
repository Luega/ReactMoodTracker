import Chart from "../Chart/Chart";

const MoodsChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0, max: 310 },
    { label: "Feb", value: 0, max: 280 },
    { label: "Mar", value: 0, max: 310 },
    { label: "Apr", value: 0, max: 300 },
    { label: "May", value: 0, max: 310 },
    { label: "Jun", value: 0, max: 300 },
    { label: "Jul", value: 0, max: 300 },
    { label: "Aug", value: 0, max: 310 },
    { label: "Sep", value: 0, max: 300 },
    { label: "Oct", value: 0, max: 310 },
    { label: "Nov", value: 0, max: 300 },
    { label: "Dec", value: 0, max: 310 },
  ];

  for (const mood of props.moods) {
    const moodMonth = mood.date.getMonth();
    chartDataPoints[moodMonth].value += mood.value;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default MoodsChart;
