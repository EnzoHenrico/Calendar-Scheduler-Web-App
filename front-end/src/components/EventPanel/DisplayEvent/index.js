import { useContext } from "react";

import { DateContext } from "../../../contexts/date";
import styles from './Display.module.css';

const DisplayEvent = ({ data }) => {
  const { currentDate } = useContext(DateContext);

  console.log(data)
  
  const { eventName, initDate, endDate, description } = data;
  const { year, month, day } = currentDate;

  const initHour = new Date(initDate).getHours();
  const initMinutes = new Date(initDate).getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false});

  const endHour = new Date(endDate).getHours();
  const endMinutes = new Date(endDate).getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false});

  return(
    <div className={styles.displayBox}>
        <h2>{eventName}</h2>
        <p>{day}/{month}/{year} - {initHour}:{initMinutes} to {endHour}:{endMinutes}</p>
        <p>{description}</p>
    </div>
  );
};

export default DisplayEvent;