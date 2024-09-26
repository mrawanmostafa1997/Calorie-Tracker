/*eslint-disable*/

import { useState } from "react";
import "./App.css";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";
import ListingSection from "./components/CalorieRecordSection/ListingSection";
import Modal from "react-modal";
import styles from "./App.module.css";

const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(2023, 2, 1),
    meal: "Breakfast",
    content: "Eggs",
    calories: -200, // Consider handling negative calories
  },
  {
    id: 2,
    date: new Date(2023, 2, 2),
    meal: "Lunch",
    content: "Chicken",
    calories: 600,
  },
  {
    id: 3,
    date: new Date(2023, 2, 3),
    meal: "Dinner",
    content: "Cheese",
    calories: 200,
  },
  {
    id: 4,
    date: new Date(2023, 2, 4),
    meal: "Snack",
    content: "Chocolate",
    calories: 500,
  },
];

Modal.setAppElement("#root"); // Important for accessibility

function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      padding: "0px",
      borderRadius: "var(--theme-border-radius-smooth)",
    },
    overlay: {
      background: "rgba(0,0,0,.5)",
    },
  };

  const handleOpenModal = () => {
    // Corrected typo
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Corrected typo
    setIsModalOpen(false);
  };

  function formSubmitHandler(record) {
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
    };
    setRecords([formattedRecord, ...records]);
    handleCloseModal(); // Corrected typo
  }

  return (
    <div>
      <h1 className={styles.title}>Calorie Tracker</h1>
      <Modal
        style={modalStyles}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal} // Corrected typo
        contentLabel="Modal"
      >
        <CaloriesRecordEdit
          onCancel={handleCloseModal} // Corrected typo
          onFormSubmit={formSubmitHandler}
        />
      </Modal>

      <ListingSection records={records} />
      {records.length === 0 ? <div>No Results are found</div> : null}
      <button className={styles["open-modal-button"]} onClick={handleOpenModal}>
        Track Food
      </button>
    </div>
  );
}

export default App;
