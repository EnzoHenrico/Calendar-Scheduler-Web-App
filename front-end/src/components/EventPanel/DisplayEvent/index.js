import { useContext } from "react";

import { DateContext } from "../../../contexts/date";
import styles from './Display.module.css';

const DisplayEvent = ({ data }) => {
  const { currentDate, formattNumbers } = useContext(DateContext);

  const { eventName, initDate, endDate, description } = data;
  const { year, month, day } = currentDate;

  const initHour = formattNumbers(new Date(initDate).getHours());
  const initMinutes = formattNumbers(new Date(initDate).getMinutes());

  const endHour = formattNumbers(new Date(endDate).getHours());
  const endMinutes = formattNumbers(new Date(endDate).getMinutes());

  return(
    <div className={styles.displayBox}>
        <h2>{eventName}</h2>
        <p>{formattNumbers(day)}/{formattNumbers(month)}/{year} - {initHour}:{initMinutes} to {endHour}:{endMinutes}</p>
        <p>{description}</p>
    </div>
  );
};

export default DisplayEvent;