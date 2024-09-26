/* eslint-disable */
import CalorieRecord from "./CalorieRecord";
import styles from "./CalorieRecordList.module.css";

function CalorieRecordList(props) {
  const { records } = props;

  const checkValidation = (record, index) => {
    console.log("in Calorie Record From ListingSection list");
    console.log(record);
    console.log("after to Calorie Record Claorie Record list");

    if (record.calories < 0) {
      return null; // Return null to skip rendering
    } else {
      return (
        <li className="list-item" key={record.id}>
          <CalorieRecord
            id={index}
            date={record.date}
            meal={record.meal}
            content={record.content}
            calories={record.calories}
          />
        </li>
      );
    }
  };

  return records?.length ? (
    <ul className={styles["record-list"]}>
      {records.map((record, index) => checkValidation(record, index))}
    </ul>
  ) : (
    <div className="placeholder">There are No results</div>
  );
}

export default CalorieRecordList;
