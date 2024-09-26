import { useState } from "react";
import StyledRecordCell from "../common/StyledRecordCell";
import styles from "./CalorieRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";

function CalorieRecord(props) {
  console.log("in Calorie Record From Calorie Record list");
  console.log(props.date);
  console.log("to Calorie Record Date Record");

  const [currentCalories, setCurrentCalories] = useState(props.calories);

  return (
    <ul className={styles.record}>
      <li>
        <CalorieRecordDate date={props.date} />
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li>
        <StyledRecordCell className={styles["record-calories"]}>
          {currentCalories} {/* Use state instead of props.calories */}
        </StyledRecordCell>
      </li>
    </ul>
  );
}

export default CalorieRecord;
