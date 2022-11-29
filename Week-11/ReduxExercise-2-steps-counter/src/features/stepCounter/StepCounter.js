import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount, resetSteps } from "./stepCounterSlice";
import styles from "./Counter.module.css";

export function StepCounter() {
  const stepsCount = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <span className={styles.value}>
        You have walked {stepsCount} steps today!
      </span>

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Add Steps
        </button>
        <button
          className={styles.button1}
          onClick={() => dispatch(resetSteps())}
        >
          Reset Steps
        </button>
      </div>
    </div>
  );
}
