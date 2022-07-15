import { useContext } from "react";

import { DateContext } from "../../../contexts/date";
import styles from './Display.module.css';

const DisplayEvent = ({ data }) => {
  const { currentDate } = useContext(DateContext);
  
  const { eventName, initDate, endDate, description } = data;
  const { year, month, day } = currentDate;

  const initHour = new Date(initDate).getHours() + 1;
  const initMinutes = new Date(initDate).getMinutes() + 1;

  const endHour = new Date(endDate).getHours() + 1;
  const endMinutes = new Date(endDate).getMinutes() + 1;

  return(
    <div className={styles.displayBox}>
        <h2>{eventName}</h2>
        <p>{day}/{month}/{year} - {initHour}:{initMinutes} to {endHour}:{endMinutes}</p>
        <p>{description}</p>
    </div>
  );
};

export default DisplayEvent;