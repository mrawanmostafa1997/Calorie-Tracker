import { useState } from "react";
import CalorieRecordList from "./CalorieRecordList";
import styles from "./CalorieRecordList.module.css";
import { getDateFromString } from "../utils";

function ListingSection(props) {
  const { records } = props;
  const [currentDate, setCurrentDate] = useState(new Date());

  // Format the date for the input with zero-padded month and day
  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Corrected month and padded
    const day = String(date.getDate()).padStart(2, "0"); // Zero-padded day
    return `${year}-${month}-${day}`;
  };

  function dateChangeHandler(event) {
    setCurrentDate(getDateFromString(event.target.value));
  }

  const dateFilter = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="date">
        Select Date:
      </label>
      <input
        value={formatDateForInput(currentDate)}
        onChange={dateChangeHandler}
        className={styles["listing-picker-input"]}
        id="date"
        type="date"
      />
      <CalorieRecordList records={records.filter(dateFilter)} />
    </>
  );
}

export default ListingSection;
