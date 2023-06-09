import "./MoodDate.css";

const MoodDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="mood-date">
      <div className="mood-date__month">{month}</div>
      <div className="mood-date__day">{day}</div>
      <div className="mood-date__year">{year}</div>
    </div>
  );
};

export default MoodDate;
