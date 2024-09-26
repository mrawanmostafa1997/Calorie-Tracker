import StyledRecordCell from "../common/StyledRecordCell";
import styles from "./CalorieRecordDate.module.css";

const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function CalorieRecordDate(props) {
  const month = MONTH[props.date.getMonth()];
  const day = props.date.getDate(); // Corrected to get the day of the month
  const year = props.date.getFullYear();
  console.log("at calorie record date");
  console.log({ year, month, day });

  return (
    <StyledRecordCell>
      <div className={styles["record-date-month"]}>{month}</div>
      <div className={styles["record-date-day"]}>{day}</div>
      <div className={styles["record-date-year"]}>{year}</div>
    </StyledRecordCell>
  );
}

export default CalorieRecordDate;
